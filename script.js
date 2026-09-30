function addRecommendation() {
  // Get input elements
  let recommendation = document.getElementById("new_recommendation_text");
  let name = document.getElementById("new_recommendation_name");

  // Verify non-empty submission
  if (recommendation.value != null && recommendation.value.trim() !== "") {
    // Create element for new recommendation
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    
    let author = name.value.trim() !== "" ? name.value : "Anonymous";
    element.innerHTML = `<p>"${recommendation.value}"</p><span>- ${author}</span>`;
    
    // Append to recommendation list
    document.getElementById("all_recommendations").appendChild(element);
    
    // Reset form fields
    recommendation.value = "";
    if (name) name.value = "";

    // Task 3 Requirement: Invoke showPopup ONLY when a recommendation is submitted
    showPopup(true);
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.display = 'flex';
  } else {
    document.getElementById('popup').style.display = 'none';
  }
}
