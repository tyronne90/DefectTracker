$(".imgAdd").click(function() {
  $(this)
    .closest(".row")
    .find(".imgAdd")
    .before(
      '<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>'
    );
});
$(document).on("click", "i.del", function() {
  $(this)
    .parent()
    .remove();
});
$(function() {
  $(document).on("change", ".uploadFile", function() {
    var uploadFile = $(this);
    var files = !!this.files ? this.files : [];
    if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

    if (/^image/.test(files[0].type)) {
      // only image file
      var reader = new FileReader(); // instance of the FileReader
      reader.readAsDataURL(files[0]); // read the local file

      reader.onloadend = function() {
        // set image data as background of div
        //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
        uploadFile
          .closest(".imgUp")
          .find(".imagePreview")
          .css("background-image", "url(" + this.result + ")");
      };
    }
  });
});

//doughnut
var ctxD = document.getElementById("doughnutChart").getContext("2d");
var myLineChart = new Chart(ctxD, {
  type: "doughnut",
  data: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360"
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774"
        ],
        hoverBorderWidth: [1, 5, 1, 1],
        hoverBorderColor: ["black", "black", "black", "black"]
      }
    ]
  },
  options: {
    responsive: true
  }
});

//pie
var ctxP = document.getElementById("pieChart").getContext("2d");
var myPieChart = new Chart(ctxP, {
  type: "pie",
  data: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360"
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774"
        ]
      }
    ]
  },
  options: {
    responsive: true
  }
});

// popovers initialization - on hover
$('[data-toggle="popover-hover"]').popover({
  html: true,
  trigger: "hover",
  placement: "bottom",
  content: function() {
    return '<img src="' + $(this).data("img") + '" />';
  }
});
