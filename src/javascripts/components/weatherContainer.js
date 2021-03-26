const searchForm = () => {
  document.querySelector('#search-box').innerHTML = `
  <form id="get-weather" class="shadow-lg p-4 rounded">
  <div class="form-group">
    <h1 for="search" id="search-title" class="text-center mb-3 mt-3">Do you need a jacket?</h1>
    <input type="text" class="form-control mt-4" id="location" aria-describedby="location" placeholder="Enter City Name">
  </div>
  <button type="submit" id="search-weather" class="btn btn-outline-dark mt-2 ml-1 mb-2">Let's see!</button>
</form>`;
};

export default searchForm;
