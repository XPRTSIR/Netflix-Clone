function validate() {
  let user, pass, s1, s2, z;
  user = document.getElementById("inp");
  pass = document.getElementById("pwd");

  s1 = document.getElementById("s1");
  s2 = document.getElementById("s2");

  if (user.value == "") {
    s1.innerHTML = "*Must be fill";
  } else {
    s1.innerHTML = "";
  }
  if (pass.value == "") {
    s2.innerHTML = "*Must be fill";
  } else {
    s2.innerHTML = "";
  }

  if (user.value == "" || pass.value == "") {
    z = false;
  } else {
    z = true;
  }
  return z;
}
