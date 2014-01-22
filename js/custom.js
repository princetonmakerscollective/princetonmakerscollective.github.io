//custom js goes here
// Get Events from calendar
function getEvents(target)
{
	var urlString = "https://www.googleapis.com/calendar/v3/calendars/princetonmakerscollective%40gmail.com/events?key=AIzaSyCw_dy9xo38qpWBBS9keUmtXQKjUOxcTU0";
	var targetDiv = $("." + target);

	// Data returned from get request to google cal
	var f = $.get(urlString).done(function(data)
	{
		if(!data)	return;
		// for each event in the calendar ...

		data["items"].forEach(function(entry)
		{
			// Event title
			targetDiv.append("<h2>" + entry["summary"] + "</h2>" +
			"<h3>" + entry["start"]["dateTime"] + "</h3>"
			+ "<p>" + entry["description"] + "</p>");
		});
		console.log(data);
		
	}
	).always(function(){console.log("done")});
}

// This puts fetched events into the events area
getEvents("upcomingEvents");