const textArea = document.getElementById('textArea');
    const fontSizeInput = document.getElementById('fontSize');
    const fontFamilySelect = document.getElementById('fontFamily');
    const boldCheckBox = document.getElementById('bold');
    const italicCheckBox = document.getElementById('italic'); 
    const backgroundColor = document.getElementById('backgroundColorInput');
    const textColor = document.getElementById('textColorInput');
    const textAlignment = document.getElementById('textAlignment');
    const lineHeightSelect = document.getElementById('lineHeight');
   
  //  Chnage terary operator to if else
  // Chnage Italic and bold to button
  // Fix all the bugs in the code 
  // Style your project, make it look more attractive
  // Add more functionality to your notepad
    
    fontSizeInput.addEventListener('input', () => {
      textArea.style.fontSize = fontSizeInput.value + 'px';
    });
    
    fontFamilySelect.addEventListener('input', () => {
      textArea.style.fontFamily = fontFamilySelect.value;
    });

    
    let isBold = false;

        function toggleBold() {
            const textArea = document.getElementById("textArea");

            if (!isBold) {
                textArea.style.fontWeight = "bold";
                isBold = true;
            } else {
                textArea.style.fontWeight = "normal";
                isBold = false;
            }
        }


    let isItalic = false;
        
        function toggleItalic() {
            const textArea = document.getElementById("textArea");
           
            if(!isItalic) {
              textArea.style.fontStyle = "italic";
              isItalic = true;
            } else {
              textArea.style.fontStyle = "normal";
              isItalic = false;
            }
        
        }
    
   // function changeFontWeight(weight) {
    // var textArea = document.getElementById('textArea');
    //  if (weight == 'bold') {
      //  textArea.style.fontWeight = 'bold';
     // } 
     // else {
      //  textArea.style.fontWeight = 'normal';
     // }
   // }
    
    //function changeFontStyle(style) {
      //var textArea = document.getElementById('textArea');
     // if (style == 'italic') {
      //  textArea.style.fontStyle = 'italic';
     // } else {
     //   textArea.style.fontStyle = 'normal';
     // }
      
  //  }

    // boldCheckBox.addEventListener('change', () => {
    //  textArea.style.fontWeight = boldCheckBox.checked ? 'bold' : 'normal';
    // });

    // italicCheckBox.addEventListener('change', () => {
    //    textArea.style.fontStyle = italicCheckBox.checked ? 'italic' : 'normal';
    //  });

    backgroundColor.addEventListener('input', () => {
        textArea.style.background = backgroundColor.value;
    });
   
    textColor.addEventListener('input', () => {
        textArea.style.color = textColor.value;
    });

    textAlignment.addEventListener('input', () => {
        textArea.style.textAlign = textAlignment.value;
    });

    lineHeightSelect.addEventListener('change', () => {
        textArea.style.lineHeight = lineHeightSelect.value;
    });




    

    

    
