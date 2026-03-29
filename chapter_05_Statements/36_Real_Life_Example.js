let isLogged = true;
let userRole = "editor";
/**
 * app.vwo.com  - > viewer , editor or Admin
 *  View - > Limited view
 * Editor can edit and view
 * Admin can do all the things
 *
 */
if (isLogged) {
  if (userRole === "admin") {
    console.log("admin can do all the things");
  } else if (userRole === "editor") {
    console.log("Welcome Editor - edit access granted.");
  } else if (userRole === "viewer") {
    console.log("Welcome Viewer  - Read-only Access");
  } else {
    console.log("No idea which role you are !!");
  }
} else {
  console.log(" You are not logged in !!");
}
