
var ChannelsCollection = Backbone.Collection.extend({url:'/channels',urlRoot : '/'} );

 channels = new ChannelsCollection();


/*
$(".dropdown dt a").on('click', function () {
          $(".dropdown dd ul").slideToggle('fast');
      });

      $(".dropdown dd ul li a").on('click', function () {
          $(".dropdown dd ul").hide();
      });

      function getSelectedValue(id) {
           return $("#" + id).find("dt a span.value").html();
      }

      $(document).bind('click', function (e) {
          var $clicked = $(e.target);
          if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
      });

      $('.mutliSelect input[type="checkbox"]').on('click', function () {

          var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
              title = $(this).val() + ",";

          if ($(this).is(':checked')) {
              var html = '<span title="' + title + '">' + title + '</span>';
              $('.multiSel').append(html);
              $(".hida").hide();
          }
          else {
              $('span[title="' + title + '"]').remove();
              var ret = $(".hida");
              $('.dropdown dt a').append(ret);

          }
      });
*/

function onData()
{
    console.log("get to onData");
    console.log(channels);
    //channels.trigger("loaded");
    //document.getElementById('multi-selector').innerHTML =
    var str =
        "<div>" +
        "<dl class='dropdown'>" +
        "<dt> <a href='#'><span class='hida'>Select</span>" +
        "<p class='multiSel'></p> <a> </dt> <dd> " +
        "<div class='mutliSelect'> <ul>" ;
    for( var i=0; i<channels.models.length; ++i )
    {
        var num  = channels.models[i].get('num');
        var name = channels.models[i].get('name');
        str += "<li><label><input id='channel_selector_" + num + "' ";
        str += "type='checkbox' value='" + name + "' />" + name + "</label>"
        str += "</li>";
    }
    str +=
        "</ul></div></dd><button onClick='parseClick()' >Filter</button></dl>" +
        "</div>";
    document.getElementById('multi-selector').innerHTML = str;
}

function parseClick()
{
    var str = "";
    for( var i=0; i<channels.models.length; ++i )
    {
        var num  = channels.models[i].get('num');
        var name = channels.models[i].get('name');
        var cbid = "channel_selector_" + num;
        console.log(cbid);
        var cb = document.getElementById(cbid);
        if( cb.checked )
        {
            if(str!="")
                str += ",";
            str += name;
        }
    }
    str = "/listit.html?channels=" + str ;
    window.location.href = str;
}


function onBodyLoad()
{
    console.log("got to onBodyLoad",channels);
    channels.fetch({success:onData});
}
