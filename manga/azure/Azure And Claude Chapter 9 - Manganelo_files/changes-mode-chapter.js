$(document).ready(function(){var style='<style class="mode-dark">      \n\
.panel-chapter-comment, .panel-chapter-info-bot, .container-footer-content { background-color: #3e3e3e; }       \n\
.panel-chapter-info-bot, .container-footer-content .pn-hot-link a, .pn-contacts p { color: #d0d0d0; }       \n\
.container-footer { border-color: #2b2b2b; }        \n\
.panel-navigation .navi-change-chapter { background: #d0d0d0; color: #000; }        \n\                                                                                                                            \n\
</style>';if($.cookie('changer-mode-dark')&&$.cookie('changer-mode-dark')=='yes'){$('head').append(style);}
$('.mode-changer').click(function(){if($('.mode-dark').length){$('.mode-dark').remove();$.cookie('changer-mode-dark','no',{expires:30,path:"/"});}else{$('head').append(style);$.cookie('changer-mode-dark','yes',{expires:30,path:"/"});}
fc_fb_comment_load('load');});});