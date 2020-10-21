rbtFeelings.onclick=function(){
  lblFeelings.value=`I would agree that you are a ${$("input[name=rbtFeelings]:checked").prop("value")} person too!`
}
btnfavExercises.onclick=function(){
  ChangeForm(favExercises)
}