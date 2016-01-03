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
* __Fejlesztői környezet__: Cloud 9 felhőalapú IDE, ami a www.c9.io linken keresztül elérhető. Virtuális gépként(szerverként) is tudjuk használni, amit szabadon szerkeszthetünk, valamint megoszthatunk másokkal és a kódunkba is betekintést engedhetünk. A fejlesztés során az EMBER.js javascript nyelv lett használva.
* __Könyvtárstruktúrában lévő mappák funkciója__: Az *_app/pods_* mappán belül külön könyvtára van minden modellnek, komponensnek, és templatenek és routenak, a logikailag összetartozóak egy mappán belül vannak. Az oldal megjelenéséért a __templatek__ (hbs fájlok) felelnek, melyek sablonját az adapter tamplateje adja, az objektumok szerkeszetét a __modellek__ adják, az __adapter__ pedig biztosítja a kapcsolatot a szerverrel.

## Felhasználói dokumentáció
1. __A futtatáshoz ajánlott hardver-, szoftver konfiguráció:__ 
    * 2 GB memória
    * 3.-ik / 4.-edik generációs i5 processzor
    * Windows 7 vagy újabb
    * Google Chrome
2. __A program használata:__ A felhasználó a kezdőlapon találja magát, ahonnan elnavigálhat a *_Tantárgyak_* listájához, vagy felvehet a listára új elemet a *_Tantárgy felvétele_* oldalon, esetleg megtekintheti a *_Rólunk_* oldalt. Ha új elemet vesz fel, az megjelenik a *_Tantárgyak_* oldalon. Itt szerkesztheti, illetve törölheti is az adott tárgyat.
