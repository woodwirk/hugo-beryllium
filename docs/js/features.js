(() => {
  // ns-params:@params
  var baseurl = "https://woodwirk.github.io/hugo-beryllium/";
  var params_default = {baseurl};

  // js/features.js
  (function(d) {
    var insertAfter = function(target, sib) {
      target.after ? target.after(sib) : target.parentNode.insertBefore(sib, target.nextSibling);
    };
    var insertBefore = function(target, sib) {
      target.before ? target.before(sib) : target.parentNode.insertBefore(sib, target);
    };
    a = d.querySelector("li#menu-search > a");
    if (a) {
      var t = a.innerText, fuse;
      a.addEventListener("click", function(e) {
        e.preventDefault();
        s = a.previousElementSibling;
        if (a.innerText === "\xD7") {
          if (s)
            s.style.display = "none";
          d.body.classList.remove("search");
          a.innerText = t;
          return;
        }
        if (!s) {
          s = document.createElement("div");
          s.innerHTML = '<input type="search" class="search-input" disabled placeholder="Loading search index...">';
          var input = s.firstElementChild;
          insertBefore(a, s);
          var c = d.createElement("div");
          c.className = "container list search-results";
          var m = d.createElement("main");
          c.appendChild(m);
          insertBefore(d.querySelector(".content"), c);
          input.addEventListener("keydown", function(e2) {
            if (this.value === "" && e2.key === "Escape")
              a.click();
          });
          input.addEventListener("input", function(e2) {
            if (!fuse)
              return;
            var highlight = function(key_type, text, matches, len) {
              var indices;
              for (var item of matches) {
                if (item.key === key_type)
                  indices = item.indices;
              }
              if (!indices)
                return text.substr(0, len);
              var p, pair, k = 0, n = Math.ceil(len / 2);
              while (pair = indices.shift()) {
                if (pair[1] - pair[0] >= k) {
                  p = pair;
                  k = p[1] - p[0];
                }
              }
              return (p[0] - n > 0 ? "[...] " : "") + text.substring(p[0] - n, p[0]) + "<b>" + text.substring(p[0], p[1] + 1) + "</b>" + text.substring(p[1] + 1, p[1] + 1 + n) + (p[1] + 1 + n < text.length ? " [...] " : "");
            };
            var res, sec = d.createElement("section"), sec2, h, u, sum;
            sec.className = "article-list";
            m.innerHTML = "";
            for (res of fuse.search(this.value)) {
              sec2 = sec.cloneNode();
              h = d.createElement("h1");
              u = d.createElement("a");
              u.href = res.item.uri;
              u.target = "_blank";
              u.innerText = res.item.title;
              h.appendChild(u);
              sum = d.createElement("div");
              sum.innerHTML = highlight("content", res.item.content, res.matches, 300);
              sec2.appendChild(h);
              sec2.appendChild(sum);
              if (res.item.tags) {
                article_tags = d.createElement("div");
                article_tags.innerHTML = "Tags: " + res.item.tags.join(", ");
                sec2.appendChild(article_tags);
              }
              if (res.item.categories) {
                article_categories = d.createElement("div");
                article_categories.innerHTML = "Categories: " + res.item.categories.join(", ");
                sec2.appendChild(article_categories);
              }
              m.appendChild(sec2);
            }
            ;
          });
          if (!fuse) {
            var request = new XMLHttpRequest();
            request.responseType = "json";
            request.addEventListener("load", function(e2) {
              var res = request.response;
              if (!res || res.length === 0) {
                input.placeholder = "Failed to load search index";
                return;
              }
              input.disabled = false;
              input.placeholder = "Type to search";
              input.focus();
              fuse = new Fuse(request.response, {
                keys: ["title", "content", "tags", "categories"],
                includeMatches: true,
                ignoreLocation: true,
                threshold: 0.1
              });
            }, false);
            request.open("GET", params_default.baseurl.concat("/index.json"));
            request.send(null);
          }
        }
        s.style.display = "block";
        s.firstElementChild.focus();
        a.innerText = "\xD7";
        d.body.classList.add("search");
      });
    }
  })(document);
})();
