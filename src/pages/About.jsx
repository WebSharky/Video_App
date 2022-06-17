
const About = () => {

  
    return (
        <div>
          <br />
          <h3>Apka stworzona na cele rekrutacyjne wg wytycznych.</h3>
          <br />
          <p>Aplikacja stworzona wg wytycznych, która ma zawierać następujące funkcje:</p>
          <br />
          <ul>
            <li>Dodanie filmu YT za pomoca linku, skróconego linku lub samego id</li>
            <li>Filmy wuyświetlone z miniaturką, datą dodania do biblioteki, tytułem, ilością lików i wyświetleń</li>
            <li>Filmy z dostępnymi akcjami : obejrzyj, usuń, dodaj do ulubionych</li>
            <li>Modal w którym wyświetla się film</li>
            <li>Demo kontent i wyczyszczenie kontentu</li>
            <li>Filtr ulubione</li>
            <li>Sortowanie: najstarsze/najnowsze/ po likach, po wyświetleniach</li>
            <li>Użycie Reactstrap</li>
          </ul>
          <br /> <hr /> <br />
          <p>Dodatkowo: </p>
          <br />
          <ul>
            <li>Aplikacja posiada README</li>
            <li>Najnowsza wersja REact'a</li>
            <li>Wykorzystuje localStorage</li>
            <li>Do localStorage zapisywane są tylko id filmików z playlisty, aby zawsze liczba like'ów, wyswietleń itd. była aktualna</li>
            <li>Wykorzystanie hooków - użyłem useState, useEffect, useRef, useContext, useReducer</li>
            <li>Uniknięcie prop drilling przez context</li>
            <li>krótkie funckcje</li>
            <li>Niezagnieżdżanie ifów</li>

          </ul>
          <br /> <hr /> <br />
          <p>Do poprawy ( a raczej czeka na zrobienie) </p>
          <br />
          <ul>
            <li>Dodawanie filmików z vimeo</li>
            <li>Responsywność w przypadku layoutu listy</li>
            <li>Paginacja</li>
            <li>Sensowna organizacja komponentów</li>
            <li>Wersja wizualna, żeby sensownie to wygladało.</li>
            <li>Sprawdzanie po id czy filmik juz istnieje w ulbuionych lub filmach (brak duplikatu)</li>
            <li>I wiele innych rzeczy na które niestety zabrakło mi czasu:(</li>
            <li>Jak tylko trochę trochę go znajdę, popracuję nad Apką, żeby zaimplementować dodatkowe funkcjonalności - stay tuned:)</li>
          </ul>
          <br />


        </div>
      );
    }

export default About

