# Struktura projekta

Vsi templati uporabljajo določene skupne stile, ki se nahajajo v shared mapi

# HTML templati

Vsak template ima definirane sekcije, ki se potem lahko kopirajo v obstoječo stran.
Da se upoštevajo stili, je potrebno vključiti ./shared/style.css in css HTML templata npr. ./events/events.css

# CSS datoteke

Vse sekcije so v html datotekah označene z unikatnim id-jem, enako je narejeno tudi v CSS datotekah.

# Slider komponente

Sliderje nisem implementiral, ker ga imate že implementiranega. Sem pa ustvaril placeholderje oz. kartice, ki se nahajajo v grid-u (3 columns). Tako, da lahko kopirate stil za elemente, ki bodo šli v vaš slider. Potrebno bo samo nastaviti širino elementov, ki gredo v vaš slider (grid tukaj ne bo OK).
