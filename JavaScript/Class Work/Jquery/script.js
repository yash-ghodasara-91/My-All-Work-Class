// $("document").ready(()=>{
//     alert("page is loaded")
// })

$("#hide").click(()=>{
    $("#heading").hide()
})

$("#show").click(()=>{
    $("#heading").show()
})

$("#toggle").click(()=>{
    $("#heading").toggle()
})



$("#up").click(()=>{
    $("#heading").slideUp(2000)
})

$("#down").click(()=>{
    $("#heading").slideDown(1000)
})

$("#slidetoggle").click(()=>{
    $("#heading").slideToggle(2000)
})



$("#in").click(()=>{
    $("#heading").faidIn()
})

$("#out").click(()=>{
    $("#heading").faiOut()
})


$("#faidtoggle").click(()=>{
    $("#heading").faidToggle()
})



