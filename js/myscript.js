let skillBtn = document.getElementById("n-skill"),
  skillBtnAr = document.getElementById("nar-skill"),
  lang = document.getElementById("lang"),
  langAr = document.getElementById("lang-ar"),
  eng = document.getElementById("eng"),
  ara = document.getElementById("ara"),
  heroEn = document.getElementById("hero-en"),
  heroAr = document.getElementById("hero-ar"),
  infoEn = document.getElementById("info-en"),
  infoAr = document.getElementById("info-ar"),
  btn = `<div class="col-md-3">
<label for="exampleInputText7" class="form-label">Skills</label>
<input type="text" class="form-control" id="exampleInputText7" aria-describedby="textHelp"
  placeholder="Skills">
</div>
<div class="col-md-3">
<label for="grad5" class="form-label">Percentage of perficton</label>
<select class="form-select" aria-label="Default select example" id="grad5">
  <option selected>Select skill percent</option>
  <option value="1">100%</option>
  <option value="2">50%</option>
  <option value="3">10%</option>
</select>
</div>
<div class="col-md-3">
<label for="exampleInputText8" class="form-label">Skills</label>
<input type="text" class="form-control" id="exampleInputText8" aria-describedby="textHelp"
  placeholder="Skills">
</div>
<div class="col-md-3">
<label for="grad6" class="form-label">Percentage of perficton</label>
<select class="form-select" aria-label="Default select example" id="grad6">
  <option selected>Select skilll percent</option>
  <option value="1">100%</option>
  <option value="2">50%</option>
  <option value="3">10%</option>
</select>
</div>`,
  btnAr = `<div class="col-md-3">
  <label for="exampleInputText7" class="form-label">المهارات</label>
  <input type="text" class="form-control" id="exampleInputText7" aria-describedby="textHelp" placeholder="أكتب مهاراتك">
</div>
<div class="col-md-3">
  <label for="grad5" class="form-label">درجة الكفاءة</label>
  <select class="form-select" aria-label="Default select example" id="grad5">
    <option selected="">اختر درجة</option>
    <option value="1">100%</option>
    <option value="2">50%</option>
    <option value="3">10%</option>
  </select>
</div>
<div class="col-md-3">
  <label for="exampleInputText8" class="form-label">المهارات</label>
  <input type="text" class="form-control" id="exampleInputText8" aria-describedby="textHelp" placeholder="أكتب مهاراتك">
</div>
<div class="col-md-3">
  <label for="grad6" class="form-label">درجة الكفاءة</label>
  <select class="form-select" aria-label="Default select example" id="grad6">
    <option selected="">اختر درجة</option>
    <option value="1">100%</option>
    <option value="2">50%</option>
    <option value="3">10%</option>
  </select>
</div>
`;
skillBtn.addEventListener("click", (e) => {
  e.preventDefault();
  skillBtn.previousElementSibling.innerHTML += btn;
});

skillBtnAr.addEventListener("click", (e) => {
  e.preventDefault();
  skillBtnAr.previousElementSibling.innerHTML += btnAr;
});

lang.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("rtl");
  ara.classList.toggle("hide");
  ara.classList.toggle("show");
  eng.classList.toggle("hide");

  heroAr.classList.toggle("hide");
  heroAr.classList.toggle("show");
  heroEn.classList.toggle("hide");

  infoAr.classList.toggle("hide");
  infoAr.classList.toggle("show");
  infoEn.classList.toggle("hide");
});

langAr.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("rtl");
  ara.classList.toggle("hide");
  ara.classList.toggle("show");
  eng.classList.toggle("hide");

  heroAr.classList.toggle("hide");
  heroAr.classList.toggle("show");
  heroEn.classList.toggle("hide");

  infoAr.classList.toggle("hide");
  infoAr.classList.toggle("show");
  infoEn.classList.toggle("hide");
});
