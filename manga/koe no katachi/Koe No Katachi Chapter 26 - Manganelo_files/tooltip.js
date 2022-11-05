var stickytooltip={tooltipoffsets:[20,-30],fadeinspeed:200,rightclickstick:false,stickybordercolors:["black","darkred"],stickynotice1:["Press \"s\"","or right click","to sticky box"],stickynotice2:"Click outside this box to hide it",isdocked:false,positiontooltip:function($,$tooltip,e){var x=e.pageX+this.tooltipoffsets[0],y=e.pageY+this.tooltipoffsets[1]
var tipw=$tooltip.outerWidth(),tiph=$tooltip.outerHeight(),x=(x+tipw>$(document).scrollLeft()+$(window).width())?x-tipw-(stickytooltip.tooltipoffsets[0]*2):x
y=(y+tiph>$(document).scrollTop()+$(window).height())?$(document).scrollTop()+$(window).height()-tiph-10:y
$tooltip.css({left:x,top:y})},showbox:function($,$tooltip,e){$tooltip.fadeIn(this.fadeinspeed)
this.positiontooltip($,$tooltip,e)},hidebox:function($,$tooltip){if(!this.isdocked){$tooltip.stop(false,true).hide()
$tooltip.css({borderColor:'black'}).find('.stickystatus:eq(0)').css({background:this.stickybordercolors[0]}).html(this.stickynotice1)}},docktooltip:function($,$tooltip,e){this.isdocked=true
$tooltip.css({borderColor:'darkred'}).find('.stickystatus:eq(0)').css({background:this.stickybordercolors[1]}).html(this.stickynotice2)},init:function(targetselector,tipid){jQuery(document).ready(function($){var $targets=$(targetselector)
var $tooltip=$('#'+tipid).appendTo(document.body)
if($targets.length==0)
return
var $alltips=$tooltip.find('div.atip')
if(!stickytooltip.rightclickstick)
stickytooltip.stickynotice1[1]=''
stickytooltip.stickynotice1=stickytooltip.stickynotice1.join(' ')
stickytooltip.hidebox($,$tooltip)
$targets.bind('mouseenter',function(e){$alltips.hide().filter('#'+$(this).attr('data-tooltip')).show()
stickytooltip.showbox($,$tooltip,e)})
$targets.bind('mouseleave',function(e){stickytooltip.hidebox($,$tooltip)})
$targets.bind('mousemove',function(e){if(!stickytooltip.isdocked){stickytooltip.positiontooltip($,$tooltip,e)}})
$tooltip.bind("mouseenter",function(){stickytooltip.hidebox($,$tooltip)})
$tooltip.bind("click",function(e){e.stopPropagation()})
$(this).bind("click",function(e){if(e.button==0){stickytooltip.isdocked=false
stickytooltip.hidebox($,$tooltip)}})
$(this).bind("contextmenu",function(e){if(stickytooltip.rightclickstick&&$(e.target).parents().andSelf().filter(targetselector).length==1){stickytooltip.docktooltip($,$tooltip,e)
return false}})})}}
function tooltip(){$('.tooltip').hover(function(e){var target='#'+($(this).attr('data-tooltip'));$(target).show();},function(){var target='#'+($(this).attr('data-tooltip'));$(target).hide();});}
stickytooltip.init("*[data-tooltip]","mystickytooltip")