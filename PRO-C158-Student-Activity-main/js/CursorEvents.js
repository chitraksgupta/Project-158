AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
 init: function() {
  this.handlemouseenterevent()
  this.handlemouseleaveevent()
 },
 handleplacesliststate: function() {
  const id = this.el.getAttribute("id")
  const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
  if (placesId.includes(id)) {
    const placescontainer = document.querySelector("#places-container")
    placescontainer.setAttribute("cursor-listener",{selectedItemId:id})
    this.el.setAttribute("material",{color:"orange",opacity:1})
  }
 },
 handlemouseenterevent: function() {
  this.el.addEventListener("mouseenter",() =>{
    this.handleplacesliststate()
  })
 },
 handlemouseleaveevent: function() {
  this.el.addEventListener("mouseleave",() =>{
    const {selectedItemId}=this.data
    if (selectedItemId){
      const el = document.querySelector(`#${selectedItemId}`)
      const id = el.getAttribute("id")
      if (id==selectedItemId){
        el.setAttribute("material",{color:"blue",opacity:1})
      }
    }
  })
 },
 
});
