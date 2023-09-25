const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    const rawData = await response.json();

    if (!response.ok) {
      throw new Error(`code: ${response.status}, message: ${rawData.message}`);
    }
    const courses = rawData.courses;

    for (let i = 0; i < courses.length; i++) {
      const main = document.getElementById("site-main");
      const newSection = document.createElement("section");
      newSection.setAttribute("class", "subject");
      newSection.innerHTML = `
<h3>${courses[i].courseNo} ${courses[i].abbrName}</h3>
<h4>จำนวนหน่วยกิต</h4>
<p>${courses[i].credit}หน่วยกิต</p>
<h4>ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
<h4>${courses[i].department}</h4>
<h4>ประเภท GenEd</h4>
<h4>${courses[i].genEdType}</h4>

`;
      main.appendChild(newSection);
    }
  } catch (err) {
    console.log(err);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  main();
});
