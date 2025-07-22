// console.log(projectName); 
// console.log(apps); 

// const models = []

  
// function add_model(){
//     options = ``
//     for(let i = 0; i <apps.length; i++){
//         options+= ` <option value="${apps[i]}">${apps[i]}</option>`
//     }
//     document.querySelector('#continer').innerHTML += 
//     `
//     <div class="grid_card">
//             <svg onclick="remove_model(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
//             <label for="model_name" class="model_name">Model Name</label>
//             <input type="text" id="model_name" name="model_name" placeholder="Model Name">
//             <div class="fields" id='fields'>
//                 <button onclick="add_fields(this)">Add Field</button>
                
//             </div>
//             <div class="fields" id="relation">
//                 <button onclick="add_relation(this)">Add Relation</button>
                
//             </div>
//             <div class="fields" id="app">
//                 <label for="">Included in the app</label>
//                 <select name="" id="app_name">
//                 `+ options  + `</select>
//             </div>
//             <button onclick="save_model(this)">Save</button>
//         </div>

//     `;
// }


// function remove_model(el){
//     el.parentElement.remove()
// }

// function add_fields(el){
//     el.parentElement.innerHTML += 
//     `
//    <div>
//                     <svg onclick="remove_fields(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>

//                     <label for="">Field Name</label>
//                     <input type="text" name="" id="field_name">
//                     <label for="">Filed Type</label>
//                     <select name="" id="field_type">
//                         <option value="CharField">CharField</option>
//                         <option value="TextField">TextField</option>
//                         <option value="IntegerField">IntegerField</option>
//                         <option value="FloatField">FloatField</option>
//                         <option value="BooleanField">BooleanField</option>
//                         <option value="DateField">DateField</option>
//                         <option value="DateTimeField">DateTimeField</option>
//                         <option value="EmailField">EmailField</option>
//                         <option value="URLField">URLField</option>
//                         <option value="FileField">FileField</option>
//                         <option value="ImageField">ImageField</option>
//                     </select>
//                 </div>
//     `;
// }


// function remove_fields(el){
//     el.parentElement.remove()
// }


// function add_relation(el){
    
//     options = ``

//     for(let i = 0; i < models.length; i++){
//         options += `<option value="${models[i].name}">${models[i].name}</option>`
//     }
//     el.parentElement.innerHTML+= `
//     <div>
//                     <svg onclick="remove_fields(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
//                     <label for="">Relation Type</label>
//                     <select name="" id="relation_type">
//                         <option value="ForeignKey">ForeignKey</option>
//                         <option value="OneToOneField">OneToOneField</option>
//                         <option value="ManyToManyField">ManyToManyField</option>
//                     </select>
//                     <label for="">With Model</label>
//                     <select name="" id="with_model">
//                        ` + options + `
//                     </select>
//                 </div>
//     `;
// }

// function save_model(el){
//     model_el = el.parentElement;

//     var model_name, model_app;
//     var model_fields = []
//     var model_relations = []
//     model_name = model_el.querySelector('#model_name').value;
//     model_app = model_el.querySelector('#app_name').value;
//     model_el.querySelector('#fields').querySelectorAll('div').forEach(element => {
//         obj = {
//             'field_name': element.querySelector('#field_name').value,
//             'field_type': element.querySelector('#field_type').value
//         };
//         model_fields.push(obj)
//     });
//     model_el.querySelector('#relation').querySelectorAll('div').forEach(element => {
//         obj = {
//             'relation_type': element.querySelector('#relation_type').value,
//             'with_model': element.querySelector('#with_model').value
//         };
//         model_relations.push(obj)
//     });


//     final_model = {
//         'name': model_name,
//         'app': model_app,
//         'fields': model_fields,
//         'relations': model_relations
//     }

//     models.push(final_model);

//     model_el.innerHTML = `<label class="model_name">${model_name}</label>`
//     console.log(final_model)

// }


console.log(projectName);
console.log(apps);

const models = [];

/**
 * إضافة مودل جديد إلى الكونتينر
 */
function add_model() {
  let options = "";

  // إنشاء خيارات التطبيقات
  for (let i = 0; i < apps.length; i++) {
    options += `<option value="${apps[i]}">${apps[i]}</option>`;
  }

  document.querySelector('#continer').innerHTML += `
    <div class="grid_card">
      <!-- زر حذف المودل -->
      <svg onclick="remove_model(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
        <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
      </svg>

      <label for="model_name" class="model_name">Model Name</label>
      <input type="text" id="model_name" name="model_name" placeholder="Model Name">

      <div class="fields" id="fields">
        <button onclick="add_fields(this)">Add Field</button>
      </div>

      <div class="fields" id="relation">
        <button onclick="add_relation(this)">Add Relation</button>
      </div>

      <div class="fields" id="app">
        <label for="">Included in the app</label>
        <select id="app_name">
          ${options}
        </select>
      </div>

      <button onclick="save_model(this)">Save</button>
    </div>
  `;
}

/**
 * حذف مودل
 */
function remove_model(el) {
  el.parentElement.remove();
}

/**
 * إضافة حقل إلى المودل
 */
function add_fields(el) {
  el.parentElement.innerHTML += `
    <div>
      <svg onclick="remove_fields(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
        <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
      </svg>

      <label>Field Name</label>
      <input type="text" id="field_name">

      <label>Field Type</label>
      <select id="field_type">
        <option value="CharField">CharField</option>
        <option value="TextField">TextField</option>
        <option value="IntegerField">IntegerField</option>
        <option value="FloatField">FloatField</option>
        <option value="BooleanField">BooleanField</option>
        <option value="DateField">DateField</option>
        <option value="DateTimeField">DateTimeField</option>
        <option value="EmailField">EmailField</option>
        <option value="URLField">URLField</option>
        <option value="FileField">FileField</option>
        <option value="ImageField">ImageField</option>
      </select>
    </div>
  `;
}

/**
 * حذف حقل من المودل
 */
function remove_fields(el) {
  el.parentElement.remove();
}

/**
 * إضافة علاقة إلى المودل
 */
function add_relation(el) {
  let options = "";

  for (let i = 0; i < models.length; i++) {
    options += `<option value="${models[i].name}">${models[i].name}</option>`;
  }

  el.parentElement.innerHTML += `
    <div>
      <svg onclick="remove_fields(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
        <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
      </svg>

      <label>Relation Type</label>
      <select id="relation_type">
        <option value="ForeignKey">ForeignKey</option>
        <option value="OneToOneField">OneToOneField</option>
        <option value="ManyToManyField">ManyToManyField</option>
      </select>

      <label>With Model</label>
      <select id="with_model">
        ${options}
      </select>
    </div>
  `;
}

/**
 * حفظ مودل جديد مع التحقق من المدخلات
 */
// function save_model(el) {
//   const model_el = el.parentElement;

//   const model_name = model_el.querySelector('#model_name').value.trim();
//   const model_app = model_el.querySelector('#app_name').value;
//   const model_fields = [];
//   const model_relations = [];

//   // ✅ قائمة الأخطاء
//   const errors = [];

//   // 🔴 التحقق من اسم المودل
//   if (model_name === "") {
//     errors.push("⚠️ Model name is required.");
//   }

//   // 🔴 التحقق من اسم التطبيق
//   if (model_app === "") {
//     errors.push("⚠️ App name is required.");
//   }

//   // 🔴 التحقق من وجود حقول
//   const field_divs = model_el.querySelector('#fields').querySelectorAll('div');
//   if (field_divs.length === 0) {
//     errors.push("⚠️ At least one field is required.");
//   } else {
//     // ✅ تحقق من أسماء الحقول
//     field_divs.forEach((element, index) => {
//       const field_name = element.querySelector('#field_name').value.trim();
//       if (field_name === "") {
//         errors.push(`⚠️ Field ${index + 1} is missing a name.`);
//       }
//     });
//   }

//   // 🔴 إذا كان هناك أخطاء، عرضها كلها للمستخدم
//   if (errors.length > 0) {
//     alert("Please fix the following errors:\n\n" + errors.join("\n"));
//     return;
//   }

//   // ✅ إضافة الحقول بعد التحقق
//   field_divs.forEach(element => {
//     const field_name = element.querySelector('#field_name').value.trim();
//     const field_type = element.querySelector('#field_type').value;

//     model_fields.push({
//       'field_name': field_name,
//       'field_type': field_type
//     });
//   });

//   // ✅ إضافة العلاقات
//   model_el.querySelector('#relation').querySelectorAll('div').forEach(element => {
//     model_relations.push({
//       'relation_type': element.querySelector('#relation_type').value,
//       'with_model': element.querySelector('#with_model').value
//     });
//   });

//   // ✅ إنشاء مودل نهائي
//   const final_model = {
//     'name': model_name,
//     'app': model_app,
//     'fields': model_fields,
//     'relations': model_relations
//   };

//   models.push(final_model);

//   // ✅ عرض اسم المودل بعد الحفظ
//   model_el.innerHTML = `<label class="model_name">${model_name}</label>`;

//   console.log(final_model);
// }

function save_model(el) {
  const model_el = el.parentElement;

  const model_name = model_el.querySelector('#model_name') ? model_el.querySelector('#model_name').value.trim() : "";
  const model_app = model_el.querySelector('#app_name') ? model_el.querySelector('#app_name').value : "";
  const model_fields = [];
  const model_relations = [];

  const errors = [];

  // ✅ التحقق فقط إذا كانت في حالة تعديل أو إنشاء (بها input)
  if (model_name === "") {
    errors.push("⚠️ Model name is required.");
  }

  if (model_app === "") {
    errors.push("⚠️ App name is required.");
  }

  const field_divs = model_el.querySelector('#fields') ? model_el.querySelector('#fields').querySelectorAll('div') : [];
  if (field_divs.length === 0) {
    errors.push("⚠️ At least one field is required.");
  } else {
    field_divs.forEach((element, index) => {
      const field_name = element.querySelector('#field_name').value.trim();
      if (field_name === "") {
        errors.push(`⚠️ Field ${index + 1} is missing a name.`);
      }
    });
  }

  if (errors.length > 0) {
    alert("Please fix the following errors:\n\n" + errors.join("\n"));
    return;
  }

  // ✅ إضافة الحقول
  field_divs.forEach(element => {
    const field_name = element.querySelector('#field_name').value.trim();
    const field_type = element.querySelector('#field_type').value;

    model_fields.push({
      'field_name': field_name,
      'field_type': field_type
    });
  });

  // ✅ إضافة العلاقات
  const relation_divs = model_el.querySelector('#relation') ? model_el.querySelector('#relation').querySelectorAll('div') : [];
  relation_divs.forEach(element => {
    model_relations.push({
      'relation_type': element.querySelector('#relation_type').value,
      'with_model': element.querySelector('#with_model').value
    });
  });

  // ✅ إنشاء مودل نهائي
  const final_model = {
    'name': model_name,
    'app': model_app,
    'fields': model_fields,
    'relations': model_relations
  };

  // ✅ تحديث أو إضافة في models
  const index = models.findIndex(m => m.name === model_name);
  if (index !== -1) {
    models[index] = final_model;
  } else {
    models.push(final_model);
  }

  // ✅ استبدال محتوى البطاقة بزر تعديل
  model_el.innerHTML = `
    <label class="model_name">${model_name}</label>
    <button onclick="edit_model(this)">Edit</button>
  `;

  console.log(final_model);
}

/**
 * دالة تعديل مودل
 */
function edit_model(el) {
  const model_el = el.parentElement;
  const model_name = model_el.querySelector('.model_name').innerText;

  // ✅ جلب بيانات المودل من models
  const model = models.find(m => m.name === model_name);

  if (!model) {
    alert("Model data not found.");
    return;
  }

  // ✅ بناء HTML لإعادة ملء البيانات
  let options = "";
  apps.forEach(app => {
    const selected = app === model.app ? "selected" : "";
    options += `<option value="${app}" ${selected}>${app}</option>`;
  });

  // ✅ حقول المودل
  let fields_html = `<button onclick="add_fields(this)">Add Field</button>`;
  model.fields.forEach(field => {
    fields_html += `
      <div>
        <svg onclick="remove_fields(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
          <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
        <label>Field Name</label>
        <input type="text" id="field_name" value="${field.field_name}">
        <label>Field Type</label>
        <select id="field_type">
          <option value="CharField" ${field.field_type === "CharField" ? "selected" : ""}>CharField</option>
          <option value="TextField" ${field.field_type === "TextField" ? "selected" : ""}>TextField</option>
          <option value="IntegerField" ${field.field_type === "IntegerField" ? "selected" : ""}>IntegerField</option>
          <option value="FloatField" ${field.field_type === "FloatField" ? "selected" : ""}>FloatField</option>
          <option value="BooleanField" ${field.field_type === "BooleanField" ? "selected" : ""}>BooleanField</option>
          <option value="DateField" ${field.field_type === "DateField" ? "selected" : ""}>DateField</option>
          <option value="DateTimeField" ${field.field_type === "DateTimeField" ? "selected" : ""}>DateTimeField</option>
          <option value="EmailField" ${field.field_type === "EmailField" ? "selected" : ""}>EmailField</option>
          <option value="URLField" ${field.field_type === "URLField" ? "selected" : ""}>URLField</option>
          <option value="FileField" ${field.field_type === "FileField" ? "selected" : ""}>FileField</option>
          <option value="ImageField" ${field.field_type === "ImageField" ? "selected" : ""}>ImageField</option>
        </select>
      </div>
    `;
  });

  // ✅ علاقات المودل (يمكنك لاحقًا بناءها بنفس فكرة الحقول)

  // ✅ إعادة بناء البطاقة
  model_el.innerHTML = `
    <label for="model_name" class="model_name">Model Name</label>
    <input type="text" id="model_name" name="model_name" placeholder="Model Name" value="${model.name}">

    <div class="fields" id="fields">
      ${fields_html}
    </div>

    <div class="fields" id="relation">
      <button onclick="add_relation(this)">Add Relation</button>
    </div>

    <div class="fields" id="app">
      <label>Included in the app</label>
      <select id="app_name">
        ${options}
      </select>
    </div>

    <button onclick="save_model(this)">Save</button>
  `;
}

function send_models(){
  document.getElementById('modelsInput').value = JSON.stringify(models);
  document.getElementById('project_name').value = projectName;
  document.getElementById('final_apps').value = JSON.stringify(apps);
  document.getElementById('modelsForm').submit();
}