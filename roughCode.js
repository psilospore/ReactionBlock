
comments = document.getElementsByClassName(" noncollapsed comment")
//"entry unvoted"
//"user text"
//"user-text... etc"
//"md"

var isReaction = {};

isReaction["http://i.imgur.com/omHN0g8.gifv"] = true;

var urlRegex = /\b(http|https)?(:\/\/)?(\S*)\.(\w{2,4})\b/;

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
			
		}
	}

}