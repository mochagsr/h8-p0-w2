/*
==> no 1.
START

STORE "deltaF" with any number
STORE "m" with any number
STORE "a" with any number

CALCULATE "m" times "a"
SET "deltaF" value with calculation result

DISPLAY "Resultan gayanya ", "deltaF"

END

==> no 2.

START

STORE "tahun" with any number

IF "tahun" mod 4 equals to 0
      IF "tahun" mod 100 equals to 0
              IF "tahun" mod 400 equals to 0
                      DISPLAY "ini tahun kabisat "
              ELSE
                      DISPLAY "bukan tahun kabisat"
              ENDIF
      ENDIF
ELSE
    DISPLAY "ini bukan tahun kabisat"
ENDIF

END

==> no 3.
START

STORE "count" with 1
STORE "pakaian" with 1
STORE "mesincuci"

FOR each "count" to 20
    
    IF "count" less than 20
        CALCULATE "mesincuci" add with "pakaian"
        SET "mesincuci" value with calculation result 
        DISPLAY "mesin cuci sudah bisa dinyalakan"
    ENDIF

ENDFOR

END

==> no 4.
START

STORE "jumlahmurid" with 40
STORE "murid" with 1
STORE "kuku" with any value string

FOR each "murid" to "jumlahmurid"
      IF "murid"  equals to "kuku"
              DISPLAY "perlu diberi pujian"
        ELSE
              DISPLAY "perlu diberi hukuman"
      ENDIF
ENDFOR

END
*/