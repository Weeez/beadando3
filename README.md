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
 ![Ábra](https://raw.githubusercontent.com/weeez/beadando3/master/public/osztalydiagram.jpg "")

## Tervezés
 1. Architektúra terv
  * Oldaltérkép
  * Végpontok
 2. Felhasználó felületmodell:
  * Főoldal
  * Tantárgyak
  * Új felvétele
  * Rólunk
 3. Osztálymodell:
 4. Dinamikus műküödés

## Implementáció

## Felhasználói dokumentáció
