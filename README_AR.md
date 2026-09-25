# OODI Proxy Seloom1

تطبيق Android مبني بـ Capacitor وWireGuard، يدعم استثناء التطبيقات من VPN مع البحث وإظهار أيقونات التطبيقات، ويعمل محلياً دون الاعتماد على الإنترنت لفتح الواجهة.

## بيانات التطبيق

- Package Name: `com.oodiproxyseloom1`
- الإصدار الحالي: `2.0`
- أقل إصدار Android: API 30 (Android 11)
- Target SDK: 36

## بناء التطبيق

```bash
npm ci
npm run lint
npm run android:sync
cd android
./gradlew assembleDebug assembleRelease
```

نسخة Release الموقعة للتوزيع تحتاج مفتاح توقيع ثابتاً محفوظاً خارج GitHub. النسخة المرفقة في Release `v2.0` موقعة للتجربة.
