#Dokumentáció - Tantárgy felvétel (tanári oldalról) - 3. beadandó

Balázs András - QO728I - xeropax@gmail.com

------

##Követelmények
###Az oldal egy tantárgyfelvételhez szükséges tárgylista megjelenítéséhez, valamint kezeléséhez nyújt szolgáltatást.
## Funkcionális követelmények:
  * Az oldal lista-tartalmához a felhasználó tud új elemet felvenni
  * Az oldal lista-tartalmát a felhasználó tudja módosítani
  * Az oldal lista-tartalmát a felhasználó tudja törölni

## Nem funkcionális követelmények:
  * A megjelenő oldal egyértelműen kezelhető

## Szakterületi fogalomjegyzék:
  * subject: A tantárgy adatait tároló objektum. Tulajdonságai:
    * name: A tárgy neve, karakterlánc (String),
    * code: A tárgy kódja, karakterlánc (String),
    * size: A tárgy férőhelyeinek száma, egész szám (Number),
    * location: A tárgy helyszíne, karakterlánc (String),
    * teacher: A tárgy előadója, karakterlánc (String)
  * list: A tantárgyak listája. Kódbeli reprezentációja a subject-ek listázása, html oldalon.
  * new: Új tantárgy felvételének lehetősége, űrlap oldal segítségével, html gombbal.
  * update: Egy létező tantárgy módosításának lehetősége, űrlap oldal segítségével, html gombbal.
  * delete: Egy létező tantárgy törlésének lehetősége, html gombbal.

## Használatieset-modell:
 * Használati eset diagram</br>
 ![Ábra](https://raw.githubusercontent.com/weeez/beadando3/master/public/osztalydiagram.jpg "")

 * A felhasználó listájának szerkesztési folyamata</br>
 ![Ábra](https://raw.githubusercontent.com/weeez/beadando3/master/public/folyamat.jpg "")

## Tervezés
1. Architektúra terv
    * Oldaltérkép
        * Főoldal
        * Tantárgyak (módosítás/törlés)
        * Tárgy felvétele
        * Rólunk
    * Végpontok:
        * '/' - főoldal
        * 'subjects/list' - Tantárgyak listája
        * 'subjects/new' - Új tantárgy felvétele
        * 'subjects/update/:id' - Tantárgy módosítása
  
2. Felhasználó felületmodell:
  * Főoldal</br>
![Ábra](https://raw.githubusercontent.com/weeez/beadando3/master/public/index.jpg "") 

  * Tantárgyak</br>
![Ábra](https://raw.githubusercontent.com/weeez/beadando3/master/public/list.jpg "")  
  
  * Új felvétele</br>
![Ábra](https://raw.githubusercontent.com/weeez/beadando3/master/public/new.jpg "")  
   
  * Rólunk</br>
![Ábra](https://raw.githubusercontent.com/weeez/beadando3/master/public/about.jpg "") 

3. Osztálymodell</br>
![Ábra](https://raw.githubusercontent.com/weeez/beadando3/master/public/subject_class.jpg "")

4. Dinamikus műküödés
![Ábra](https://raw.githubusercontent.com/weeez/beadando3/master/public/szekvencia.jpg "")

## Implementáció

## Felhasználói dokumentáció
