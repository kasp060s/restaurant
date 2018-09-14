        let modal = document.querySelector("#modal")

        let dest = document.querySelector(".data-container")
        retter,
        kategoriFilter = "alle";

        document.addEventListener("DOMContentLoaded", hentJson);

        async function hentJson() {
            let myJson = await fetch("menu.json");
            retter = await myJson.json();
            visRetter();
        }

        document.querySelectorAll("menu-item").forEach(kanp => {
            knap.addEventListener("click", filtrering)
        });

        function filtrering() {
            dest.textContent = "";
            kategoriFilter = this.getAttribute("data-kategori");
            visRetter();




        }

        function visRetter() {

            let dest = document.querySelector(".data-container"),
                temp = document.querySelector(".data-template");




            retter.forEach(ret => {
                if (ret.Kategori == kategoriFilter || kategoriFilter == "alle") {

                    let klon = temp.cloneNode(true).content;
                    klon.querySelector("h2").textContent =
                        ret.Titel;
                    klon.querySelector("img").src = "imgs" + ret.Billede + ".jpg";
                    klon.querySelector("img")addEventListener("click", () =>{
                    visModal(ret);
                    });


                    klon.querySelector(".data-kategori").textContent = ret.Kategori;
                    klon.querySelector(".data-pris").textContent = ret.Pris;
                    klon.querySelector(".data-kortbeskrivelse").textContent = ret.Kortbeskrivelse;
                    klon.querySelector(".data-kategori").textContent = ret.Kategori;

                    dest.appendChild(Klon);

                }
            })

        }

            function visModal(retten) {
                modal.classList.add("vis");
                modal.querySelector(".modal-kategori").textContent = retten.id;
                modal.querySelector(".modal-titel").textContent = retten.Titel;
                modal.querySelector(".modal-pris").textContent = retten.Pris;
                modal.querySelector(".modal-kortbeskrivelse").textContent = retten.Kortbeskrivelse;
                modal.querySelector(".modal-billede").src = "imgs" + retten.Billede + ".jpg";
                modal.querySelector(".modal-billee").alt = "Billede af" + retten.billede;
                modal.querySelector("button").addEventListener("click", skjulModal);


}

    function skjulModal(){
        modal.classList.remove("vis");
}
