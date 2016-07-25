$(document).ready(function() {
  //Initializing all the summernote instances
  $('#summernote-1').summernote();
  $('#summernote-2').summernote({
    height: 250,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null             // set maximum height of editor
  });
  $('#summernote-3').summernote({
    height: 250,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    callbacks: {
      onImageUpload: function(files) {
        sendFile(files[0], $(this));
      }
    }
  });

  //Showing html output
  $("#show-html-output-btn").click(function() {
    var markupStr = $('#summernote-2').summernote('code');
    //Replacing all the greater than signs and less than signs with &gt; &lt; respectively
    // />/g and /</g are used to replace all the respective signs.
    var newStr = markupStr.replace(/>/g , "&gt;");
    newStr = newStr.replace(/</g , "&lt;");
    $("#show-html-output-container").empty();
    $("#show-html-output-container").append(newStr);
  });
});

function sendFile(file, editor) {
  var data = new FormData();
  data.append("file", file);
  var url = "POST script url ";
  console.log(file);
  console.log(editor);
  console.log(data);

/*
  //AJAX call for uploading image to the server
  $.ajax({
    data: data,
    type: "POST",
    url: url,
    cache: false,
    contentType: false,
    processData: false,
    success: function(objFile) {
      //Setting the image from the server to the editor for display
      editor.summernote('insertImage', objFile.folder+objFile.file);
    },
    error: function(jqXHR, textStatus, errorThrown) {

    }
  });
*/
}
