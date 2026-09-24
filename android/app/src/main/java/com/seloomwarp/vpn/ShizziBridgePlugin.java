package com.seloomwarp.vpn;

import android.content.Intent;
import android.content.pm.PackageManager;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;

import rikka.shizuku.Shizuku;

@CapacitorPlugin(name = "ShizziBridge")
public final class ShizziBridgePlugin extends Plugin {
    @com.getcapacitor.PluginMethod
    public void status(PluginCall call) {
        JSObject result = new JSObject();
        boolean installed = false;
        try {
            getContext().getPackageManager().getPackageInfo("moe.shizuku.privileged.api", 0);
            installed = true;
        } catch (PackageManager.NameNotFoundException ignored) {
        }
        result.put("installed", installed);
        result.put("running", Shizuku.pingBinder());
        result.put("permissionGranted", Shizuku.checkSelfPermission() == PackageManager.PERMISSION_GRANTED);
        result.put("uid", Shizuku.getUid());
        call.resolve(result);
    }

    @com.getcapacitor.PluginMethod
    public void open(PluginCall call) {
        Intent intent = new Intent(getActivity(), dev.shizzi.MainActivity.class);
        getActivity().startActivity(intent);
        call.resolve();
    }

    @com.getcapacitor.PluginMethod
    public void openShizuku(PluginCall call) {
        Intent launch = getContext().getPackageManager().getLaunchIntentForPackage("moe.shizuku.privileged.api");
        if (launch == null) {
            call.reject("Shizuku is not installed");
            return;
        }
        getActivity().startActivity(launch);
        call.resolve();
    }
}
