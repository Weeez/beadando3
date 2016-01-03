#Dokumentáció - Tantárgy felvétel (tanári oldalról) - 3. beadandó

Balázs András - QO728I - xeropax@gmail.com

------

##Követelmények
###Az oldal egy tantárgyfelvételhez szükséges tárgylista megjelenítéséhez, valamint kezeléséhez nyújt szolgáltatást.
1. Funkcionális követelmények:
  * Az oldal lista-tartalmához a felhasználó tud új elemet felvenni
  * Az oldal lista-tartalmát a felhasználó tudja módosítani
  * Az oldal lista-tartalmát a felhasználó tudja törölni
2. Nem funkcionális követelmények:
  * A megjelenő oldal egyértelműen kezelhető
3. Szakterületi fogalomjegyzék:
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
4. Használatieset-modell:
 * Használati eset diagram
 * A felhasználó listájának szerkesztési folyamata
5. Tervezés
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
6. Implementáció
7. Felhasználói dokumentáció
