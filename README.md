# سما تاكسي - موقع الهبوط

موقع هبوط احترافي لتطبيق سما تاكسي - تطبيق التاكسي الموثوق في المملكة العربية السعودية.

## 🚀 المميزات

- ✅ **تصميم متجاوب** - يعمل على جميع الأجهزة
- ✅ **صفحة واحدة** - تنقل سلس بين الأقسام
- ✅ **دعم اللغة العربية** - تصميم RTL مع دعم الإنجليزية
- ✅ **تحسين محركات البحث** - SEO محسن للسوق السعودي
- ✅ **أداء عالي** - تحميل سريع وتجربة مستخدم ممتازة
- ✅ **رسوم متحركة سلسة** - تأثيرات بصرية احترافية

## 🛠️ التقنيات المستخدمة

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Vercel** - Deployment platform

## 📦 التثبيت والتشغيل

```bash
# تثبيت المكتبات
npm install

# تشغيل الخادم المحلي
npm run dev

# بناء المشروع للإنتاج
npm run build

# تشغيل النسخة المبنية
npm start
```

## 🚀 النشر على Vercel

### الطريقة الأولى: من خلال Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel --prod
```

### الطريقة الثانية: من خلال Git Integration

1. ادفع الكود إلى GitHub/GitLab
2. اربط المستودع بـ Vercel
3. سيتم النشر تلقائياً عند كل push

### الطريقة الثالثة: من خلال Vercel Dashboard

1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط على "New Project"
3. استورد مستودع GitHub الخاص بك
4. اتبع التعليمات

## 🔧 إعدادات النشر

### متغيرات البيئة
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_NAME=Sama Taxi
```

### إعدادات Vercel
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## �� هيكل المشروع

```
├── src/
│   ├── app/                 # App Router pages
│   ├── components/          # React components
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom hooks
│   └── translations/       # Language files
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── vercel.json            # Vercel configuration
```

## 🌟 الأقسام

1. **الرئيسية** - Hero section with video background
2. **عن التطبيق** - Features and benefits
3. **كيف يعمل** - How it works section
4. **السائقات** - Female drivers section
5. **انضم كسائق** - Join driver team
6. **حمل التطبيق** - Download app CTA

## 📱 الاستجابة

الموقع محسن للعمل على:
- 📱 الهواتف الذكية
- 📱 الأجهزة اللوحية
- 💻 أجهزة الكمبيوتر
- 🖥️ الشاشات الكبيرة

## 🎨 التخصيص

يمكنك تخصيص:
- الألوان في `tailwind.config.js`
- النصوص في `src/translations/`
- الصور في `public/`
- التصميم في `src/components/`

## 🔍 تحسين محركات البحث

الموقع محسن لـ:
- الكلمات المفتاحية السعودية
- البحث المحلي
- سرعة التحميل
- تجربة المستخدم

## 📞 الدعم

لأي استفسارات أو مساعدة في النشر، يرجى فتح issue في المستودع.

---

**تم تطوير الموقع بـ ❤️ للسوق السعودي**

## 7. Create a .gitignore file optimized for Vercel:

```gitignore:.gitignore
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.tsbuildinfo
next-env.
```
