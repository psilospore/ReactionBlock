var isReaction = {};
//Currently using an example
//TODO read from file
//TODO consider striping protocol and sub-domain from url
isReaction["http://i.imgur.com/Lmy5P.jpg"] = true;


console.log("Starting");
//"entry unvoted"
//"user text"
//"user-text... etc"
//"md"
//TODO read about content scripts

var urlRegex = /\b(http|https)?(:\/\/)?(\S*)\.(\w{2,4})\b/;

console.log(document);
if (document.URL.match(/reddit(.*)comments/)){
	//Getting all noncollapsed comments
	comments = document.getElementsByClassName(" noncollapsed comment")

	for (i = 0; i < comments.length; i++){
	comment = comments[i];
	commentDiv = comment.querySelector(".md");
	commentText = commentDiv.textContent;
	//TODO for each link check if it is in hashtable

	var matchedLinks = commentText.match(urlRegex);
	for(j = 0; (matchedLinks != null) && (j < matchedLinks.length); j++){
		//console.log(matchedLinks[j])
		if (isReaction[matchedLinks[j]]){
			console.log("found isReaction");
			//get uncollapsed comment and collapse it
			noncollapsedClass = comment.getAttribute("class"); 
			comment.setAttribute("class" , 
				noncollapsedClass.replace("noncollapsed","collapsed"));
			//Consider doing addtional actions based on options.
			/* Ideas: 
			/ + Make comment some user specified color.
			/ + Put short title or decription in tag. (using imgur api)
			/ + Allow user to not collapse.
			/ + Allow user to record global count of number of gif blocked
			*/

		}
	}

}
}

