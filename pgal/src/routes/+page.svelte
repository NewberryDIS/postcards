<script>
    import allGalleries from '$lib/gallery_data.json'

</script>


      <main>
        <div class="left">
          <div class="title">
            <h1 class="">Newberry</h1>
            <h1 class="">Postcard</h1>
            <h1 class="">Gallery</h1>
          </div>
          <div class="text-content">
            <p class="text-lg">
              The vintage postcard images featured here are free to use and
              reuse. The Newberry believes that this content is in the public
              domain, and makes these digitized copies available without
              requiring fees or permissions. For more information, see our{" "}
              <a
                href="https://www.newberry.org/policies#open-access"
                target="_blank"
                class="llines"
              >
                Open Access Policy
              </a>
              .
            </p>
            <p class="text-base">
              The Newberry houses one of the largest public collections of
              postcards and related materials in the United States. Learn more
              at our{" "}
              <a
                href="https://www.newberry.org/collection/subjects/postcards"
                target="_blank"
                class="llines"
              >
                Postcards information page
              </a>
              , browse more than{" "}
              <a
                href="https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA4UET6ZH&PN=1&WS=SearchResults"
                target="_blank"
                class="llines"
              >
                50,000 digitized postcards
              </a>{" "}
              at Newberry Digital Collections, or explore the themed sets
              featured here.
            </p>
            <p class="text-base">
              The Newberry needs your help! Please assist with making our
              postcard collections more accessible:{" "}
              <a
                href="https://www.zooniverse.org/projects/newberry/postcard-tag"
                target="_blank"
                class="llines"
              >
                Postcard Tag
              </a>
            </p>
            <p class="text-sm">
              With gratitude to the Library of Congress for its{" "}
              <a
                href="https://www.loc.gov/free-to-use/"
                target="_blank"
                class="llines"
              >
                Free to Use and Reuse Sets
              </a>
              , from which this site is inspired.
            </p>
          </div>
        </div>
        <div class="right">
          <div class="horiz">
            {imgElementer(nhGalleries)}
            <a
              class="tile nhtile empty-tile"
              target="_blank"
              href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1"
            >
              <h3>View even more postcards at Newberry Digital Collections</h3>
            </a>
          </div>
          <div class="horiz">
            <a href="#" class="htile tile notile" tabIndex={-1}>
              <img
                src="./madonna-holiday.gif"
                width={getWidth(498, 373)}
                height="300"
                alt="Madonna Ciccone dancing in a music video from the 1980s"
              />
            </a>
            {imgElementer(hGalleries)}
          </div>
        </div>
      </main>
