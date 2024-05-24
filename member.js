function skillsMember() {
  var member = document.getElementById("member").value;
  var skills = document.getElementById("skills").value;
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsList = document.getElementById("memberSkillsList");
  var memberSkillsListItems = document.getElementById("memberSkillsListItems");
  var memberSkillsListItems = document.createElement("li");
  memberSkillsListItems.textContent = member + " - " + skills;
  memberSkillsList.appendChild(memberSkillsListItems);
  memberSkills.appendChild(memberSkillsList);
}