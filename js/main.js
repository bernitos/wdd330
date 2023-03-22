
var weeklist = [

    {
        label: "lesson1",
        url: "./lesson1/lesson1.html"
      },

    {
      label: "lesson2",
      url: "./lesson2/lesson2.html"
    },
    {
      label: 'lesson3',
      url: "./lesson3/lesson3.html"
    },
    {
      label: 'lesson4',
      url: "./lesson4/lesson4.html"
    },
    {
      label: 'lesson5',
      url: "./lesson5/lesson5.html"
    },
    {
      label: 'lesson6',
      url: "./lesson6/lesson6.html"
    },
    {
      label: 'lesson7',
      url: "./lesson7/lesson7.html"
    },
    {
      label: 'lesson8',
      url: "./lesson8/lesson8.html"
    },
    {
      label: 'lesson9',
      url: "./lesson9/lesson9.html"
    },
    {
      label: 'lesson10',
      url: "./lesson10/lesson10.html"
    },
     
  ];
  listWeeklyItems(weeklist,"weekList");
  
  // Create the table of contents
  function listWeeklyItems(weekItems, listElementName) {
    //let ol = document.getElementById(listElementName);
    let ol = window.weekList;
    if(ol) {
  
      //loop  objects
      weekItems.forEach(element => {
  
        //create the anchor and set attributes
        let anchor = document.createElement('a');
          anchor.innerHTML = element.label;
          anchor.href = element.url;
          anchor.target="_blank";
  
        //create list item and attach anchor
        let li = document.createElement('li');
          li.appendChild(anchor);
  
          ol.appendChild(li);
  
      });
  
    }
  }