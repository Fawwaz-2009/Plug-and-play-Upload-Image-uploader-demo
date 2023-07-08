import { Locales } from "../types";

export const locals: Record<Locales, string> = {
  en: `
--l10n-locale-name: "en-US";
--l10n-upload-file: "Upload file";
--l10n-upload-files: "Upload files";
--l10n-choose-file: "Choose file";
--l10n-choose-files: "Choose files";
--l10n-drop-files-here: "Drop files here";
--l10n-select-file-source: "Select file source";
--l10n-selected: "Selected";
--l10n-upload: "Upload";
--l10n-add-more: "Add more";
--l10n-cancel: "Cancel";
--l10n-clear: "Clear";
--l10n-camera-shot: "Shot";
--l10n-upload-url: "Import";
--l10n-upload-url-placeholder: "Paste link here";
--l10n-edit-image: "Edit image";
--l10n-edit-detail: "Details";
--l10n-back: "Back";
--l10n-done: "Done";
--l10n-ok: "Ok";
--l10n-remove-from-list: "Remove";
--l10n-no: "No";
--l10n-yes: "Yes";
--l10n-confirm-your-action: "Confirm your action";
--l10n-are-you-sure: "Are you sure?";
--l10n-selected-count: "Selected:";
--l10n-upload-error: "Upload error";
--l10n-validation-error: "Validation error";
--l10n-no-files: "No files selected";
--l10n-browse: "Browse";
--l10n-not-uploaded-yet: "Not uploaded yet...";
--l10n-file__one: "file";
--l10n-file__other: "files";
--l10n-error__one: "error";
--l10n-error__other: "errors";
--l10n-header-uploading: "Uploading {{count}} {{plural:file(count)}}";
--l10n-header-failed: "{{count}} {{plural:error(count)}}";
--l10n-header-succeed: "{{count}} {{plural:file(count)}} uploaded";
--l10n-header-total: "{{count}} {{plural:file(count)}} selected";

--l10n-src-type-local: "From device";
--l10n-src-type-from-url: "From link";
--l10n-src-type-camera: "Camera";
--l10n-src-type-draw: "Draw";
--l10n-src-type-facebook: "Facebook";
--l10n-src-type-dropbox: "Dropbox";
--l10n-src-type-gdrive: "Google Drive";
--l10n-src-type-gphotos: "Google Photos";
--l10n-src-type-instagram: "Instagram";
--l10n-src-type-flickr: "Flickr";
--l10n-src-type-vk: "VK";
--l10n-src-type-evernote: "Evernote";
--l10n-src-type-box: "Box";
--l10n-src-type-onedrive: "Onedrive";
--l10n-src-type-huddle: "Huddle";
--l10n-src-type-other: "Other";

--l10n-src-type: var(--l10n-src-type-local);

--l10n-caption-from-url: "Import from link";
--l10n-caption-camera: "Camera";
--l10n-caption-draw: "Draw";
--l10n-caption-edit-file: "Edit file";

--l10n-file-no-name: "No name...";

--l10n-toggle-fullscreen: "Toggle fullscreen";
--l10n-toggle-guides: "Toggle guides";
--l10n-rotate: "Rotate";
--l10n-flip-vertical: "Flip vertical";
--l10n-flip-horizontal: "Flip horizontal";
--l10n-brightness: "Brightness";
--l10n-contrast: "Contrast";
--l10n-saturation: "Saturation";
--l10n-resize: "Resize image";
--l10n-crop: "Crop";
--l10n-select-color: "Select color";
--l10n-text: "Text";
--l10n-draw: "Draw";
--l10n-cancel-edit: "Cancel edit";

--l10n-tab-view: "Preview";
--l10n-tab-details: "Details";

--l10n-file-name: "Name";
--l10n-file-size: "Size";
--l10n-cdn-url: "CDN URL";
--l10n-file-size-unknown: "Unknown";

--l10n-camera-permissions-denied: "Camera access denied";
--l10n-camera-permissions-prompt: "Please allow access to the camera";
--l10n-camera-permissions-request: "Request access";

--l10n-files-count-limit-error-title: "Files count limit overflow";
--l10n-files-count-limit-error-too-few: "You’ve chosen {{total}}. At least {{min}} required.";
--l10n-files-count-limit-error-too-many: "You’ve chosen too many files. {{max}} is maximum.";

--l10n-files-max-size-limit-error: "File is too big. Max file size is {{maxFileSize}} bytes.";
--l10n-has-validation-errors: "File validation error ocurred. Please, check your files before upload.";
--l10n-images-only-accepted: "Only image files are accepted.";
--l10n-file-type-not-allowed: "Uploading of these file types is not allowed.";
    `,
  ar: `
    --l10n-locale-name: "ar-EG";
    --l10n-upload-file: "رفع الملف";
    --l10n-upload-files: "رفع الملفات";
    --l10n-choose-file: "اختر الملف";
    --l10n-choose-files: "اختر الملفات";
    --l10n-drop-files-here: "قم بإسقاط الملفات هنا";
    --l10n-select-file-source: "حدد مصدر الملف";
    --l10n-selected: "تم الاختيار";
    --l10n-upload: "رفع";
    --l10n-add-more: "أضف المزيد";
    --l10n-cancel: "إلغاء";
    --l10n-clear: "مسح";
    --l10n-camera-shot: "لقطة الكاميرا";
    --l10n-upload-url: "استيراد";
    --l10n-upload-url-placeholder: "الصق الرابط هنا";
    --l10n-edit-image: "تعديل الصورة";
    --l10n-edit-detail: "التفاصيل";
    --l10n-back: "عودة";
    --l10n-done: "تم";
    --l10n-ok: "حسنًا";
    --l10n-remove-from-list: "إزالة";
    --l10n-no: "لا";
    --l10n-yes: "نعم";
    --l10n-confirm-your-action: "تأكيد الإجراء الخاص بك";
    --l10n-are-you-sure: "هل أنت متأكد؟";
    --l10n-selected-count: "تم اختيار:";
    --l10n-upload-error: "خطأ في الرفع";
    --l10n-validation-error: "خطأ في التحقق";
    --l10n-no-files: "لم يتم اختيار أي ملفات";
    --l10n-browse: "تصفح";
    --l10n-not-uploaded-yet: "لم يتم الرفع بعد...";
    --l10n-file__one: "ملف";
    --l10n-file__other: "ملفات";
    --l10n-error__one: "خطأ";
    --l10n-error__other: "أخطاء";
    --l10n-header-uploading: "جارٍ رفع {{count}} {{plural:file(count)}}";
    --l10n-header-failed: "{{count}} {{plural:error(count)}}";
    --l10n-header-succeed: "تم رفع {{count}} {{plural:file(count)}}";
    --l10n-header-total: "تم اختيار {{count}} {{plural:file(count)}}";
  
    --l10n-src-type-local: "من الجهاز";
    --l10n-src-type-from-url: "من الرابط";
    --l10n-src-type-camera: "كاميرا";
    --l10n-src-type-draw: "رسم";
    --l10n-src-type-facebook: "فيسبوك";
    --l10n-src-type-dropbox: "دروب بوكس";
    --l10n-src-type-gdrive: "جوجل درايف";
    --l10n-src-type-gphotos: "جوجل فوتوز";
    --l10n-src-type-instagram: "إنستغرام";
    --l10n-src-type-flickr: "فليكر";
    --l10n-src-type-vk: "VK";
    --l10n-src-type-evernote: "ايفرنوت";
    --l10n-src-type-box: "بوكس";
    --l10n-src-type-onedrive: "وان درايف";
    --l10n-src-type-huddle: "هادل";
    --l10n-src-type-other: "أخرى";
  
    --l10n-src-type: var(--l10n-src-type-local);
  
    --l10n-caption-from-url: "استيراد من رابط";
    --l10n-caption-camera: "كاميرا";
    --l10n-caption-draw: "رسم";
    --l10n-caption-edit-file: "تعديل الملف";
  
    --l10n-file-no-name: "بلا اسم...";
  
    --l10n-toggle-fullscreen: "تبديل الشاشة الكاملة";
    --l10n-toggle-guides: "تبديل الإرشادات";
    --l10n-rotate: "دوران";
    --l10n-flip-vertical: "انعكاس رأسي";
    --l10n-flip-horizontal: "انعكاس أفقي";
    --l10n-brightness: "السطوع";
    --l10n-contrast: "التباين";
    --l10n-saturation: "التشبع";
    --l10n-resize: "تغيير حجم الصورة";
    --l10n-crop: "قص";
    --l10nSure, here's the rest of the translations:

    --l10n-select-color: "اختر اللون";
    --l10n-text: "النص";
    --l10n-draw: "رسم";
    --l10n-cancel-edit: "إلغاء التعديل";
  
    --l10n-tab-view: "معاينة";
    --l10n-tab-details: "التفاصيل";
  
    --l10n-file-name: "الاسم";
    --l10n-file-size: "الحجم";
    --l10n-cdn-url: "رابط CDN";
    --l10n-file-size-unknown: "غير معروف";
  
    --l10n-camera-permissions-denied: "تم رفض الوصول إلى الكاميرا";
    --l10n-camera-permissions-prompt: "يرجى السماح بالوصول إلى الكاميرا";
    --l10n-camera-permissions-request: "طلب الوصول";
  
    --l10n-files-count-limit-error-title: "تجاوز حد عدد الملفات";
    --l10n-files-count-limit-error-too-few: "لقد اخترت {{total}}. مطلوب على الأقل {{min}}.";
    --l10n-files-count-limit-error-too-many: "لقد اخترت العديد من الملفات. {{max}} هو الحد الأقصى.";
  
    --l10n-files-max-size-limit-error: "الملف كبير جدًا. الحد الأقصى لحجم الملف هو {{maxFileSize}} بايت.";
    --l10n-has-validation-errors: "حدث خطأ في التحقق من صحة الملف. يرجى التحقق من ملفاتك قبل الرفع.";
    --l10n-images-only-accepted: "يتم قبول ملفات الصور فقط.";
    --l10n-file-type-not-allowed: "لا يُسمح برفع هذه الأنواع من الملفات.";
    `,
};
