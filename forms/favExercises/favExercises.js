var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {
  for (i = 0; i < exercises.length; i++) {
    selExercises.addItem(exercises[i])
  }

}

selExercises.onfocusout = function() {}

btnSubmit.onclick = function() {
  if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank") {
    lblExercises.value = `You chose ${selExercises.text[0]} and ${selExercises.text[1]} - those are the two core exercises.`
  } else {
    lblExercises.value = "You did not pick the two core exercises"
  }
}
btnMobile.onclick = function() {
  ChangeForm(mobileNav)
}