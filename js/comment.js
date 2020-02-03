'use strict';

//Mes variables
var postComment;
var commentSection;

//Fonctions
function sendCommentPost(event){
	event.preventDefault();
	var thePost = $(this).serializeArray();
	$.post('post_comment.php',{
			data : { 
			ID : thePost[0].value,
	 		pseudo : thePost[1].value,
	 		content : thePost[2].value
		 		}}, 
		 getTheComment);
}

//fonction callback appellée à la réponse du serveur
function getTheComment(data){
	commentSection.append(data);
	$("#comment-post input[name='pseudo']").val("");
	$("#comment-post textarea").val("");
}

//Au chargement de la page :
$(function(){

	commentSection = $('#newComment');
	postComment = $('#comment-post').on('submit',sendCommentPost);

});