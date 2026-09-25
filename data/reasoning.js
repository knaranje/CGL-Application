window.CGL_DATA = window.CGL_DATA || {};
window.CGL_DATA.reasoning = {
  "id": "reasoning",
  "name": "General Intelligence & Reasoning",
  "icon": "🧩",
  "topics": [
    {
      "id": "analogy",
      "name": "Analogy",
      "notes": [
        {
          "heading": "Word analogy – common relations",
          "points": [
            "First find the <b>exact relation</b> in the given pair, then apply the same relation in the same order (A : B :: C : ?).",
            "Frequent relations: worker–tool (Carpenter : Saw), worker–workplace (Doctor : Hospital), instrument–measure (Barometer : Pressure), young one (Horse : Foal), dwelling (Bee : Hive), product–raw material (Paper : Pulp), study of (Ornithology : Birds), synonym/antonym, part–whole, male–female (Drake : Duck).",
            "Frame a sentence: 'A doctor works in a hospital' → 'A chef works in a kitchen'. The sentence test removes most ambiguity.",
            "Trap: the order matters. 'Hive : Bee' is dwelling : animal, not animal : dwelling."
          ]
        },
        {
          "heading": "Number analogy – quick checks",
          "points": [
            "Test in this order: square / cube, n² ± 1, n³ ± n, multiples (×k), sum or product of digits, prime sequence.",
            "Keep ready: squares up to 30, cubes up to 20 (e.g. 11³ = 1331, 12³ = 1728, 13³ = 2197).",
            "Verify your rule on the given pair <b>and</b> check that it produces only one option."
          ]
        },
        {
          "heading": "Letter analogy – position values",
          "points": [
            "A=1 … Z=26. Remember <b>EJOTY</b> = 5, 10, 15, 20, 25 to locate any letter fast.",
            "Opposite (reverse) letter: position 27 − n (A↔Z, B↔Y, M↔N). Pairs like BY, CX, GT sum to 27.",
            "Common patterns: each letter +k, alternate +/−, +1 +2 +3 increasing shift, reversal of the word, opposite letters."
          ]
        }
      ],
      "flashcards": [
        { "front": "Thermometer : Temperature :: Barometer : ?", "back": "Atmospheric pressure (instrument : what it measures)" },
        { "front": "Horse : Foal :: Frog : ?", "back": "Tadpole (animal : young one)" },
        { "front": "EJOTY positions", "back": "E = 5, J = 10, O = 15, T = 20, Y = 25" },
        { "front": "Formula for the opposite (reverse) letter", "back": "Opposite of letter at position n = letter at position 27 − n (e.g. D(4) ↔ W(23))" },
        { "front": "Entomology is the study of?", "back": "Insects (Etymology = origin of words; Ichthyology = fishes; Ornithology = birds)" },
        { "front": "Lion : Den :: Bee : ?", "back": "Hive (animal : dwelling)" },
        { "front": "Cube of 13 and 14", "back": "13³ = 2197, 14³ = 2744" }
      ],
      "questions": [
        {
          "q": "Select the option that is related to the third word in the same way as the second word is related to the first word.<br>Doctor : Hospital :: Chef : ?",
          "options": ["Menu", "Kitchen", "Recipe", "Waiter"],
          "answer": 1,
          "explanation": "A doctor <b>works in</b> a hospital (worker : workplace). Similarly, a chef works in a kitchen. Menu and recipe are things a chef uses/prepares, and a waiter is another worker, not a workplace."
        },
        {
          "q": "Ornithology : Birds :: Entomology : ?",
          "options": ["Words", "Fossils", "Insects", "Fishes"],
          "answer": 2,
          "explanation": "Ornithology is the study of birds. Entomology is the study of <b>insects</b>. Trap: Etymology (not Entomology) is the study of words; Palaeontology studies fossils; Ichthyology studies fishes."
        },
        {
          "q": "Select the number that is related to the third number in the same way as the second is related to the first.<br>8 : 512 :: 11 : ?",
          "options": ["1221", "1441", "1210", "1331"],
          "answer": 3,
          "explanation": "8³ = 512. So the second number is the cube of the first. 11³ = 11 × 11 × 11 = 121 × 11 = <b>1331</b>."
        },
        {
          "q": "CAT : DDY :: DOG : ?",
          "options": ["ERL", "EQL", "FRL", "ERK"],
          "answer": 0,
          "explanation": "C(3)+1 = D(4), A(1)+3 = D(4), T(20)+5 = Y(25). Pattern +1, +3, +5.<br>DOG: D(4)+1 = E(5), O(15)+3 = R(18), G(7)+5 = L(12) → <b>ERL</b>."
        },
        {
          "q": "BRING : YIRMT :: CLOUD : ?",
          "options": ["XOLEW", "WOLFX", "XOLFW", "XNLFW"],
          "answer": 2,
          "explanation": "Each letter is replaced by its opposite letter (27 − position): B(2)→Y(25), R(18)→I(9), I(9)→R(18), N(14)→M(13), G(7)→T(20).<br>CLOUD: C(3)→X(24), L(12)→O(15), O(15)→L(12), U(21)→F(6), D(4)→W(23) → <b>XOLFW</b>."
        },
        {
          "q": "6 : 222 :: 7 : ?",
          "options": ["343", "350", "336", "357"],
          "answer": 1,
          "explanation": "6³ + 6 = 216 + 6 = 222. So the rule is n³ + n.<br>7³ + 7 = 343 + 7 = <b>350</b>. (336 = 7³ − 7 is the trap.)"
        }
      ]
    },
    {
      "id": "classification",
      "name": "Classification (Odd One Out)",
      "notes": [
        {
          "heading": "Method",
          "points": [
            "Find a property shared by <b>three</b> options; the one that breaks it is the answer.",
            "If you find two different 'odd' properties, look for the stronger, more specific one that leaves exactly one option out.",
            "Word classes: category (planets, metals, instruments), function, habitat, gender, synonyms, country–capital, etc."
          ]
        },
        {
          "heading": "Number classification checklist",
          "points": [
            "Prime / composite: 51 = 3×17, 57 = 3×19, 87 = 3×29, 91 = 7×13 are common 'fake primes'.",
            "Perfect squares / cubes, even vs odd squares, squares of primes (4, 9, 25, 49, 121, 169, 289, 361).",
            "Divisibility (by 3, 7, 11), digit sum, number pairs following n² ± 1 or n³ ± 1.",
            "For pairs like '3 – 28', test the same rule on every pair: second = first³ + 1, etc."
          ]
        },
        {
          "heading": "Letter group classification",
          "points": [
            "Convert letters to positions and check the gaps (+2, +2 …), sums (pairs adding to 27 = opposite letters), vowels count, or reverse order.",
            "Trap: one group may differ by only a single gap (e.g. +2, +3 instead of +2, +2) – check every gap."
          ]
        }
      ],
      "flashcards": [
        { "front": "Is 91 prime?", "back": "No. 91 = 7 × 13" },
        { "front": "Primes between 50 and 100", "back": "53, 59, 61, 67, 71, 73, 79, 83, 89, 97 (10 primes)" },
        { "front": "How many primes are there from 1 to 100?", "back": "25" },
        { "front": "Letter pairs that are opposite letters", "back": "Positions add up to 27: AZ, BY, CX, DW, EV, FU, GT, HS, IR, JQ, KP, LO, MN" },
        { "front": "Is 1 a prime number?", "back": "No – 1 is neither prime nor composite. 2 is the only even prime." },
        { "front": "Squares of primes up to 400", "back": "4, 9, 25, 49, 121, 169, 289, 361" }
      ],
      "questions": [
        {
          "q": "Select the odd one out.",
          "options": ["Mercury", "Venus", "Mars", "Moon"],
          "answer": 3,
          "explanation": "Mercury, Venus and Mars are planets. The Moon is a natural satellite of the Earth, not a planet."
        },
        {
          "q": "Select the odd number.",
          "options": ["57", "37", "47", "67"],
          "answer": 0,
          "explanation": "37, 47 and 67 are prime numbers. 57 = 3 × 19 is composite (digit sum 12 is divisible by 3)."
        },
        {
          "q": "Select the odd number.",
          "options": ["361", "169", "196", "289"],
          "answer": 2,
          "explanation": "361 = 19², 169 = 13², 289 = 17² – squares of odd prime numbers. 196 = 14² is the square of an even composite number (and the only even number)."
        },
        {
          "q": "Select the letter-cluster that is different.",
          "options": ["BDF", "HJL", "MOQ", "RTW"],
          "answer": 3,
          "explanation": "BDF: B+2=D, D+2=F. HJL: +2, +2. MOQ: +2, +2. RTW: R+2=T but T+3=W. So <b>RTW</b> breaks the +2, +2 pattern."
        },
        {
          "q": "Select the letter pair that is different from the others.",
          "options": ["BY", "FT", "DW", "HS"],
          "answer": 1,
          "explanation": "B(2)+Y(25)=27, D(4)+W(23)=27, H(8)+S(19)=27 – these are opposite letters. F(6)+T(20)=26, so FT is odd (the opposite of F is U)."
        },
        {
          "q": "Select the number pair that is different from the others.",
          "options": ["5 – 124", "2 – 9", "3 – 28", "4 – 65"],
          "answer": 0,
          "explanation": "Rule: second = first³ + 1. 2³+1 = 9, 3³+1 = 28, 4³+1 = 65. But 5³+1 = 126, not 124. So <b>5 – 124</b> is odd."
        }
      ]
    },
    {
      "id": "number-series",
      "name": "Number Series",
      "notes": [
        {
          "heading": "Step-by-step attack",
          "points": [
            "1) Find differences. If not constant, find the second differences.",
            "2) If numbers grow fast, try ratios (×2, ×3) or mixed operations (×2+1, ×3−1, ×n+n).",
            "3) Check squares/cubes and near-squares (n² ± 1, n³ ± n), primes, and n(n+1).",
            "4) If terms go up and down, try an <b>alternate series</b> (odd positions and even positions separately) or two operations applied alternately."
          ]
        },
        {
          "heading": "Common patterns",
          "points": [
            "×2+1: 3, 7, 15, 31, 63, 127 (each term = 2ⁿ − 1 form).",
            "n(n+1): 2, 6, 12, 20, 30, 42 (differences 4, 6, 8, 10, 12).",
            "×1+1, ×2+2, ×3+3 …: 1, 2, 6, 21, 88, 445.",
            "Squares of primes: 4, 9, 25, 49, 121, 169.",
            "Fibonacci-type: each term = sum of previous two (1, 1, 2, 3, 5, 8, 13)."
          ]
        },
        {
          "heading": "Wrong-term questions",
          "points": [
            "Guess the rule from the majority of terms, then check every term – exactly one should fail.",
            "Trap: after correcting one term, the rest should all fit. If two terms fail, your rule is wrong."
          ]
        }
      ],
      "flashcards": [
        { "front": "3, 7, 15, 31, 63, ?", "back": "127 (each term × 2 + 1)" },
        { "front": "Differences 4, 6, 8, 10 … suggest which pattern?", "back": "n(n+1): 2, 6, 12, 20, 30, 42 …" },
        { "front": "First thing to try when a series alternates up and down?", "back": "Split into two alternate series (odd and even positions) or two alternating operations." },
        { "front": "2, 3, 5, 7, 11, 13, ?", "back": "17 (prime numbers)" },
        { "front": "1, 8, 27, 64, ?", "back": "125 (cubes)" },
        { "front": "0, 3, 8, 15, 24, ?", "back": "35 (n² − 1)" }
      ],
      "questions": [
        {
          "q": "Find the next term: 3, 7, 15, 31, 63, ?",
          "options": ["127", "125", "126", "129"],
          "answer": 0,
          "explanation": "Each term = previous × 2 + 1: 3×2+1 = 7, 7×2+1 = 15, 15×2+1 = 31, 31×2+1 = 63, 63×2+1 = <b>127</b>."
        },
        {
          "q": "Find the next term: 2, 6, 12, 20, 30, ?",
          "options": ["36", "40", "44", "42"],
          "answer": 3,
          "explanation": "Differences: 4, 6, 8, 10 → next difference 12, so 30 + 12 = <b>42</b>. (Also n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7 = 42.)"
        },
        {
          "q": "Find the next term: 4, 9, 25, 49, 121, ?",
          "options": ["169", "144", "196", "225"],
          "answer": 0,
          "explanation": "These are squares of consecutive primes: 2², 3², 5², 7², 11². The next prime is 13, so 13² = <b>169</b>. (144 = 12² is a trap – 12 is not prime.)"
        },
        {
          "q": "Find the next term: 5, 10, 8, 16, 14, 28, ?",
          "options": ["56", "24", "26", "30"],
          "answer": 2,
          "explanation": "Operations alternate ×2 and −2: 5×2 = 10, 10−2 = 8, 8×2 = 16, 16−2 = 14, 14×2 = 28, 28−2 = <b>26</b>."
        },
        {
          "q": "Find the next term: 1, 2, 6, 21, 88, ?",
          "options": ["440", "450", "455", "445"],
          "answer": 3,
          "explanation": "Pattern ×n + n: 1×1+1 = 2, 2×2+2 = 6, 6×3+3 = 21, 21×4+4 = 88, 88×5+5 = 440+5 = <b>445</b>."
        },
        {
          "q": "Find the wrong term in the series: 2, 5, 10, 17, 26, 38, 50",
          "options": ["17", "38", "26", "50"],
          "answer": 1,
          "explanation": "Terms are n² + 1: 1+1 = 2, 4+1 = 5, 9+1 = 10, 16+1 = 17, 25+1 = 26, 36+1 = <b>37</b>, 49+1 = 50. So 38 is wrong (should be 37). Differences should be 3, 5, 7, 9, 11, 13 but the given differences are 3, 5, 7, 9, 12, 12."
        }
      ]
    },
    {
      "id": "letter-series",
      "name": "Letter & Alphanumeric Series",
      "notes": [
        {
          "heading": "Letter series basics",
          "points": [
            "Write position numbers (A=1 … Z=26) and find the gap pattern: constant (+3), increasing (−2, −3, −4 …), alternate, or reverse.",
            "If a value goes past 26, subtract 26 (wrap-around: Y+3 = B).",
            "For multi-letter groups (DKM, FJP …), treat 1st, 2nd and 3rd letters as three separate series.",
            "Pairs like AZ, BY, CX: first letter moves forward, second moves backward (opposite letters)."
          ]
        },
        {
          "heading": "Blank-filling (repeating pattern) series",
          "points": [
            "Find the length of the repeating unit (often 3, 4 or 5 letters) by looking at the letters already given.",
            "Try each option in the blanks and read the whole string again – the unit must repeat exactly."
          ]
        },
        {
          "heading": "Alphanumeric sequence questions",
          "points": [
            "Number the positions first. 'Immediately preceded by X' means X is on its left; 'immediately followed by Y' means Y is on its right.",
            "'nth from the right' of a string of length L = (L − n + 1)th from the left.",
            "Check every element one by one; do not count by eye – symbols like @, #, % are easy to miss."
          ]
        }
      ],
      "flashcards": [
        { "front": "Position of letter M and its opposite", "back": "M = 13, opposite N = 14" },
        { "front": "Z, X, U, Q, L, ?", "back": "F (gaps −2, −3, −4, −5, −6)" },
        { "front": "AZ, BY, CX, DW, ?", "back": "EV" },
        { "front": "In a string of 17 elements, the 5th from the right is which from the left?", "back": "17 − 5 + 1 = 13th from the left" },
        { "front": "Wrap-around rule in letter series", "back": "If position exceeds 26, subtract 26 (e.g. X(24)+4 = 28 → 28−26 = 2 = B)" },
        { "front": "B, E, H, K, N, ?", "back": "Q (+3 each)" }
      ],
      "questions": [
        {
          "q": "Find the next term: B, E, H, K, N, ?",
          "options": ["P", "R", "S", "Q"],
          "answer": 3,
          "explanation": "B(2), E(5), H(8), K(11), N(14): each +3. Next = 17 = <b>Q</b>."
        },
        {
          "q": "Find the next term: AZ, BY, CX, DW, ?",
          "options": ["EU", "EV", "FV", "EW"],
          "answer": 1,
          "explanation": "First letters A, B, C, D → E (+1). Second letters Z, Y, X, W → V (−1). Answer <b>EV</b> (E and V are also opposite letters: 5 + 22 = 27)."
        },
        {
          "q": "Find the next term: Z, X, U, Q, L, ?",
          "options": ["G", "E", "F", "H"],
          "answer": 2,
          "explanation": "Z(26) −2 → X(24) −3 → U(21) −4 → Q(17) −5 → L(12) −6 → 6 = <b>F</b>."
        },
        {
          "q": "Find the next term: DKM, FJP, HIS, JHV, ?",
          "options": ["LGY", "KGY", "LGX", "LFY"],
          "answer": 0,
          "explanation": "1st letters: D, F, H, J (+2) → L.<br>2nd letters: K, J, I, H (−1) → G.<br>3rd letters: M, P, S, V (+3) → Y.<br>Answer <b>LGY</b>."
        },
        {
          "q": "Select the letters that fill the blanks in order to complete the series:<br>a _ c a b _ a b c _ b c",
          "options": ["bac", "cab", "bca", "abc"],
          "answer": 2,
          "explanation": "The repeating unit is 'abc': abc | abc | abc | abc. Filling: a<b>b</b>c ab<b>c</b> abc <b>a</b>bc → blanks are b, c, a = <b>bca</b>."
        },
        {
          "q": "Study the sequence: R 4 E % 7 K @ 2 M 9 # T 5 & U 3 P<br>How many numbers are immediately preceded by a letter and immediately followed by a symbol?",
          "options": ["1", "2", "3", "4"],
          "answer": 1,
          "explanation": "Check each number:<br>4: preceded by R, followed by E (letter) – no.<br>7: preceded by % – no.<br>2: preceded by @ – no.<br>9: preceded by M, followed by # – <b>yes</b>.<br>5: preceded by T, followed by & – <b>yes</b>.<br>3: preceded by U, followed by P (letter) – no.<br>Total = <b>2</b>."
        }
      ]
    },
    {
      "id": "coding-decoding",
      "name": "Coding-Decoding",
      "notes": [
        {
          "heading": "Types of letter coding",
          "points": [
            "Shift coding: every letter +k or −k (COLD → DPME is +1).",
            "Increasing shift: +1, +2, +3 … on successive letters.",
            "Reverse coding: the word is written backwards, sometimes with a shift added (TABLE → reverse ELBAT → +1 → FMCBU).",
            "Opposite letters: each letter replaced by (27 − position) (GREEN → TIVVM).",
            "Always test the rule on <b>every</b> letter of the example before applying it."
          ]
        },
        {
          "heading": "Number / position-value coding",
          "points": [
            "Sum of positions: CAT = 3+1+20 = 24. Sometimes multiplied by a constant or the number of letters.",
            "Check two given examples if available – they fix the rule (e.g. CAT = 24, BAT = 23 confirm sum of positions)."
          ]
        },
        {
          "heading": "Sentence (word-group) coding",
          "points": [
            "Compare two sentences: the common word(s) correspond to the common code(s).",
            "Eliminate step by step; the leftover code belongs to the leftover word.",
            "Order of codes is usually jumbled – never assume position matches."
          ]
        },
        {
          "heading": "Substitution trap",
          "points": [
            "If 'water' is called 'air' and 'air' is called 'fire', then 'What do we breathe?' – we breathe air, and air is called <b>fire</b>. Answer with the code name, not the real name."
          ]
        }
      ],
      "flashcards": [
        { "front": "If COLD is written as DPME, the rule is?", "back": "Each letter +1" },
        { "front": "GREEN → TIVVM. Which rule?", "back": "Opposite letters (27 − position): G↔T, R↔I, E↔V, N↔M" },
        { "front": "Sum of letter positions of DOG", "back": "4 + 15 + 7 = 26" },
        { "front": "In sentence coding, how do you find a word's code?", "back": "Take two sentences sharing that word; the code common to both is its code." },
        { "front": "If 'sky' is called 'sea', 'sea' is called 'road'. Where do fish live?", "back": "Fish live in the sea, which is called 'road'." },
        { "front": "Reverse + 1 applied to CHAIR", "back": "Reverse: RIAHC → +1: SJBID" }
      ],
      "questions": [
        {
          "q": "If COLD is coded as DPME, how will WARM be coded?",
          "options": ["XBTN", "XBSN", "YBSN", "XASN"],
          "answer": 1,
          "explanation": "C→D, O→P, L→M, D→E: each letter +1. WARM: W→X, A→B, R→S, M→N = <b>XBSN</b>."
        },
        {
          "q": "In a certain code, TABLE is written as FMCBU. How will CHAIR be written in that code?",
          "options": ["DIBJS", "SJBIE", "RJBID", "SJBID"],
          "answer": 3,
          "explanation": "TABLE reversed = ELBAT; each letter +1 → FMCBU. ✔<br>CHAIR reversed = RIAHC; +1 → R→S, I→J, A→B, H→I, C→D = <b>SJBID</b>. (DIBJS is the trap: +1 without reversing.)"
        },
        {
          "q": "In a certain code, CAT = 24 and BAT = 23. What is the code for DOG?",
          "options": ["24", "27", "26", "28"],
          "answer": 2,
          "explanation": "Code = sum of letter positions. CAT = 3+1+20 = 24 ✔, BAT = 2+1+20 = 23 ✔. DOG = 4+15+7 = <b>26</b>."
        },
        {
          "q": "If GREEN is coded as TIVVM, how is BLACK coded?",
          "options": ["YOZXP", "YOZWP", "XOZXP", "YNZXP"],
          "answer": 0,
          "explanation": "Each letter is replaced by its opposite letter (27 − n): G(7)→T(20), R(18)→I(9), E(5)→V(22), N(14)→M(13).<br>BLACK: B(2)→Y(25), L(12)→O(15), A(1)→Z(26), C(3)→X(24), K(11)→P(16) = <b>YOZXP</b>."
        },
        {
          "q": "In a certain code language:<br>'tik mo ra' means 'sun is bright'<br>'ra pen lo' means 'bright day ahead'<br>'mo lo zin' means 'day is long'<br>What is the code for 'sun'?",
          "options": ["mo", "ra", "tik", "lo"],
          "answer": 2,
          "explanation": "Sentences 1 and 2 share 'bright' and code 'ra' → bright = ra.<br>Sentences 1 and 3 share 'is' and code 'mo' → is = mo.<br>In sentence 1 the remaining word 'sun' gets the remaining code <b>tik</b>. (Sentences 2 and 3 give day = lo.)"
        },
        {
          "q": "If MANGO is coded as NCQKT, how will APPLE be coded?",
          "options": ["BRSOJ", "BQSPJ", "BRTPJ", "BRSPJ"],
          "answer": 3,
          "explanation": "M+1 = N, A+2 = C, N+3 = Q, G+4 = K, O+5 = T (shifts +1, +2, +3, +4, +5).<br>APPLE: A+1 = B, P+2 = R, P+3 = S, L+4 = P, E+5 = J = <b>BRSPJ</b>."
        }
      ]
    },
    {
      "id": "blood-relations",
      "name": "Blood Relations",
      "notes": [
        {
          "heading": "Drawing a family tree",
          "points": [
            "Use symbols: + (or square) for male, − (or circle) for female, = or ↔ for husband–wife, a horizontal line for siblings, a vertical line for parent–child.",
            "Keep each generation on one horizontal level – this avoids mixing up uncles, cousins and nephews.",
            "Do not assume gender from names in coded questions; if gender is not given, it may be 'cannot be determined'."
          ]
        },
        {
          "heading": "Pointing / introducing questions",
          "points": [
            "Start from the <b>end</b> of the sentence and move backwards: 'my paternal grandfather's only son' = my father (without 'only', it could also be a paternal uncle; a plain 'grandfather' could be maternal, so check which side is meant).",
            "'Only son of my father's father' → father. 'Only son of my mother's father' → maternal uncle (mother cannot be the son).",
            "Son of father's/mother's sibling = cousin; son of your sibling = nephew."
          ]
        },
        {
          "heading": "Coded relations (A + B, A × B …)",
          "points": [
            "Decode one symbol at a time from left to right and draw the tree.",
            "To check an option, the relation must follow definitely; e.g. 'maternal uncle' needs mother's brother, 'paternal uncle' needs father's brother."
          ]
        }
      ],
      "flashcards": [
        { "front": "Mother's brother", "back": "Maternal uncle (Mama)" },
        { "front": "Father's sister", "back": "Paternal aunt (Bua)" },
        { "front": "Brother's wife / Wife's brother", "back": "Sister-in-law / Brother-in-law" },
        { "front": "Son of my father's only son (I am male)", "back": "My son (my father's only son is me)" },
        { "front": "Son's wife", "back": "Daughter-in-law" },
        { "front": "Father's father's only son", "back": "Father" },
        { "front": "Your sibling's daughter", "back": "Niece" }
      ],
      "questions": [
        {
          "q": "Pointing to a man, Riya said, 'He is the son of my paternal grandfather's only son.' How is the man related to Riya?",
          "options": ["Cousin", "Brother", "Uncle", "Nephew"],
          "answer": 1,
          "explanation": "Riya's paternal grandfather's only son = Riya's father. The son of Riya's father = Riya's <b>brother</b>."
        },
        {
          "q": "A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?",
          "options": ["Father", "Brother", "Grandfather", "Uncle"],
          "answer": 3,
          "explanation": "A (male), B and C are siblings. C is the father of D. So A is the brother of D's father → A is D's (paternal) <b>uncle</b>."
        },
        {
          "q": "Introducing a woman, Aman said, 'She is the wife of the only son of my mother's father.' How is the woman related to Aman?",
          "options": ["Maternal aunt", "Mother", "Sister", "Grandmother"],
          "answer": 0,
          "explanation": "Aman's mother's father = maternal grandfather. His only son = Aman's mother's brother = maternal uncle (the mother is a daughter, so she cannot be the son). The uncle's wife = Aman's <b>maternal aunt</b> (mami)."
        },
        {
          "q": "P × Q means P is the father of Q; P + Q means P is the sister of Q; P − Q means P is the brother of Q; P ÷ Q means P is the mother of Q. Which expression means 'M is the maternal uncle of N'?",
          "options": ["M + K ÷ N", "M − K × N", "M − K ÷ N", "M × K − N"],
          "answer": 2,
          "explanation": "Maternal uncle = mother's brother. M − K: M is the brother of K; K ÷ N: K is the mother of N. So M is the brother of N's mother ✔.<br>M + K ÷ N → M is the sister (maternal aunt). M − K × N → K is the father, so paternal uncle. M × K − N → M is N's father."
        },
        {
          "q": "A is the son of B, a woman. C, who is B's sister, has a son D and a daughter E. F is the maternal uncle of D. How is A related to F?",
          "options": ["Son", "Brother", "Cousin", "Nephew"],
          "answer": 3,
          "explanation": "F is D's maternal uncle → F is the brother of D's mother C. C is B's sister, so F is also B's brother (B is a woman, so B cannot be F). A is B's son, so F is A's uncle and A is F's <b>nephew</b>."
        },
        {
          "q": "A $ B means A is the husband of B; A # B means A is the daughter of B; A @ B means A is the brother of B. If P @ Q # R $ S, how is S related to P?",
          "options": ["Sister", "Aunt", "Mother", "Grandmother"],
          "answer": 2,
          "explanation": "P @ Q: P is the brother of Q. Q # R: Q is the daughter of R. R $ S: R is the husband of S, so S is Q's mother. Since P is Q's brother, S is P's <b>mother</b>."
        }
      ]
    },
    {
      "id": "direction-distance",
      "name": "Direction & Distance",
      "notes": [
        {
          "heading": "Turning rules",
          "points": [
            "Right turn = 90° clockwise; left turn = 90° anticlockwise.",
            "From North: right → East, left → West. From South: right → West, left → East. From East: right → South. From West: right → North.",
            "Three right turns = one left turn; two right (or left) turns = about-turn (opposite direction).",
            "Clockwise order of the 8 directions: N, NE, E, SE, S, SW, W, NW (each step = 45°)."
          ]
        },
        {
          "heading": "Distance shortcuts",
          "points": [
            "Use a coordinate grid: East = +x, North = +y. Add all movements; final displacement = √(x² + y²).",
            "Pythagorean triplets: 3-4-5, 6-8-10, 5-12-13, 8-15-17, 7-24-25, 9-12-15, 20-21-29.",
            "Direction of final point: both x and y positive → North-East, x positive & y negative → South-East, etc."
          ]
        },
        {
          "heading": "Shadow questions",
          "points": [
            "Morning: sun in the East → shadow falls to the <b>West</b>. Evening: sun in the West → shadow falls to the <b>East</b>.",
            "At 12 noon the sun is overhead – practically no shadow (no direction question).",
            "Work out which of the person's hands (left/right) points to the shadow direction, then find the facing direction."
          ]
        }
      ],
      "flashcards": [
        { "front": "Facing South, you turn left. Which direction do you face?", "back": "East" },
        { "front": "Where does a shadow fall in the morning?", "back": "West (sun is in the East)" },
        { "front": "Walk 8 km East then 6 km North. Shortest distance from start?", "back": "10 km (6-8-10 triplet), towards North-East" },
        { "front": "Three right turns equal?", "back": "One left turn" },
        { "front": "Pythagorean triplets to memorise", "back": "3-4-5, 5-12-13, 8-15-17, 7-24-25, 20-21-29 (and multiples)" },
        { "front": "Facing West, turn 135° clockwise. New direction?", "back": "North-East (W → NW → N → NE, 45° each)" }
      ],
      "questions": [
        {
          "q": "Ravi walks 10 km towards North, turns right and walks 6 km, then turns right again and walks 10 km. How far and in which direction is he from the starting point?",
          "options": ["6 km West", "6 km East", "16 km North", "26 km East"],
          "answer": 1,
          "explanation": "North 10 km → right turn from North = East, 6 km → right turn from East = South, 10 km. The North and South movements cancel. He is <b>6 km East</b> of the start."
        },
        {
          "q": "A man walks 8 km East and then 6 km North. What is the shortest distance between his present position and the starting point?",
          "options": ["14 km", "12 km", "2 km", "10 km"],
          "answer": 3,
          "explanation": "Displacement = √(8² + 6²) = √(64 + 36) = √100 = <b>10 km</b> (towards North-East). 14 km is the total path, not the shortest distance."
        },
        {
          "q": "A person is facing North. He turns 90° clockwise, then 180° anticlockwise, and then 45° clockwise. Which direction is he facing now?",
          "options": ["North-East", "South-West", "North-West", "South-East"],
          "answer": 2,
          "explanation": "North → 90° clockwise → East. East → 180° anticlockwise → West. West → 45° clockwise (towards North) → <b>North-West</b>."
        },
        {
          "q": "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was he facing?",
          "options": ["South", "North", "East", "West"],
          "answer": 0,
          "explanation": "In the morning the sun is in the East, so shadows fall towards the West. The shadow is on his right, so his right hand points West. A person whose right is West is facing <b>South</b>."
        },
        {
          "q": "Point A is 12 m West of point B. Point C is 5 m South of B. Point D is 4 m North of A. How far and in which direction is C with respect to D?",
          "options": ["13 m South-East", "15 m North-West", "15 m South-East", "21 m South-West"],
          "answer": 2,
          "explanation": "Take B = (0, 0). A = (−12, 0), C = (0, −5), D = (−12, 4). From D to C: 12 m East and 9 m South. Distance = √(144 + 81) = √225 = 15 m. C lies East and South of D → <b>15 m South-East</b>."
        },
        {
          "q": "Starting from point P, Meena walks 20 m South, turns left and walks 15 m, turns left again and walks 35 m, and finally turns right and walks 5 m. How far and in which direction is she from P?",
          "options": ["25 m North-East", "20 m North-East", "25 m South-East", "35 m North"],
          "answer": 0,
          "explanation": "P = (0, 0). 20 m South → (0, −20). Left of South = East, 15 m → (15, −20). Left of East = North, 35 m → (15, 15). Right of North = East, 5 m → (20, 15). Distance = √(20² + 15²) = √625 = 25 m, both coordinates positive → <b>25 m North-East</b>."
        }
      ]
    },
    {
      "id": "order-ranking",
      "name": "Order & Ranking",
      "notes": [
        {
          "heading": "Core formulas",
          "points": [
            "Total = (position from left) + (position from right) − 1.",
            "Position from one end = Total − (position from other end) + 1.",
            "Persons between two people (no overlap) = difference in positions from the same end − 1.",
            "If positions from opposite ends overlap (sum of positions > total), persons between = (sum of positions) − Total − 2."
          ]
        },
        {
          "heading": "Interchange questions",
          "points": [
            "After interchange, A occupies B's old seat. So A's new position from the left + B's old position from the right − 1 = Total.",
            "Trap: the original positions of the person who moved are often extra information – focus on the seat."
          ]
        },
        {
          "heading": "Comparison (taller/heavier) questions",
          "points": [
            "Write a chain using '>' as you read each statement: S > R > P > Q > T.",
            "If a person's relative position with someone is not fixed, answer 'cannot be determined' only after checking all statements."
          ]
        }
      ],
      "flashcards": [
        { "front": "14th from left and 21st from right. Total in row?", "back": "14 + 21 − 1 = 34" },
        { "front": "In a class of 45, 17th from top → rank from bottom?", "back": "45 − 17 + 1 = 29" },
        { "front": "Persons between 12th from left and 26th from left?", "back": "26 − 12 − 1 = 13" },
        { "front": "Interchange formula", "back": "Total = new position of A (from one end) + B's old position (from the other end) − 1" },
        { "front": "A is 7th behind someone who is 9th from front. A's position from front?", "back": "9 + 7 = 16th" }
      ],
      "questions": [
        {
          "q": "Rahul is 14th from the left end and 21st from the right end of a row. How many students are there in the row?",
          "options": ["35", "34", "33", "36"],
          "answer": 1,
          "explanation": "Total = 14 + 21 − 1 = <b>34</b> (Rahul is counted twice, so subtract 1)."
        },
        {
          "q": "In a class of 45 students, Priya ranks 17th from the top. What is her rank from the bottom?",
          "options": ["28", "30", "27", "29"],
          "answer": 3,
          "explanation": "Rank from bottom = 45 − 17 + 1 = <b>29</b>."
        },
        {
          "q": "In a row, A is 10th from the left and B is 15th from the right. When they interchange their positions, A becomes 18th from the left. How many persons are in the row?",
          "options": ["32", "31", "33", "34"],
          "answer": 0,
          "explanation": "After interchange A sits in B's old seat, which is 15th from the right. That seat is now 18th from the left. Total = 18 + 15 − 1 = <b>32</b>. (A's old position, 10th, is not needed.)"
        },
        {
          "q": "In a row of 40 students, M is 12th from the left and N is 15th from the right. How many students are there between M and N?",
          "options": ["12", "11", "13", "14"],
          "answer": 2,
          "explanation": "N from the left = 40 − 15 + 1 = 26th. Students between 12th and 26th = 26 − 12 − 1 = <b>13</b>."
        },
        {
          "q": "P is taller than Q but shorter than R. S is taller than R. T is shorter than Q. Who is the third tallest?",
          "options": ["Q", "R", "S", "P"],
          "answer": 3,
          "explanation": "R > P > Q (first statement), S > R, and Q > T. Combined: S > R > P > Q > T. Third tallest = <b>P</b>."
        },
        {
          "q": "In a queue, Aarav is 9th from the front. Bina is 7th behind Aarav and 12th from the end of the queue. How many people are in the queue?",
          "options": ["26", "27", "28", "29"],
          "answer": 1,
          "explanation": "Bina's position from the front = 9 + 7 = 16th. Total = 16 + 12 − 1 = <b>27</b>."
        }
      ]
    },
    {
      "id": "seating-arrangement",
      "name": "Seating Arrangement (Linear & Circular)",
      "notes": [
        {
          "heading": "Linear arrangement",
          "points": [
            "Facing North: the person's left/right = your left/right as you look at the paper.",
            "Facing South: the person's left/right is reversed from your view – draw arrows to avoid mistakes.",
            "Fix the definite clues first (ends, middle, 'immediate' neighbours), then place the rest; use negative clues ('not adjacent') last.",
            "'Second to the right of X' means skip one seat to X's right."
          ]
        },
        {
          "heading": "Circular arrangement",
          "points": [
            "Facing the <b>centre</b>: right = anticlockwise, left = clockwise.",
            "Facing <b>outward</b>: right = clockwise, left = anticlockwise.",
            "With 2n people, 'opposite' = n seats away. With 8 people, 4th to the left and 4th to the right are the same (opposite) seat.",
            "Place the first person anywhere – a circle has no fixed start; all positions are relative."
          ]
        },
        {
          "heading": "Common traps",
          "points": [
            "'Between A and B' in a circle may have two answers (both arcs) – read the question carefully.",
            "Do not confuse 'immediate right' (adjacent) with 'to the right' (anywhere on that side in a row)."
          ]
        }
      ],
      "flashcards": [
        { "front": "Circular table, facing centre: which way is 'left'?", "back": "Clockwise" },
        { "front": "Circular table, facing outward: which way is 'right'?", "back": "Clockwise" },
        { "front": "In a row facing South, a person's right is towards which side of the paper (North at top)?", "back": "Towards the West, i.e. the left side of the paper as you look at it – reversed from the North-facing view." },
        { "front": "8 people around a circle: 4th to the right of A is?", "back": "The person opposite A (same as 4th to the left)" },
        { "front": "Best order to use clues", "back": "Fixed positions (ends/middle) → immediate neighbours → relative positions → negative clues" }
      ],
      "questions": [
        {
          "q": "Five friends A, B, C, D and E sit in a row facing North. C sits in the middle. A sits at the extreme left end. B sits to the immediate right of C. D is not adjacent to C. Who sits at the extreme right end?",
          "options": ["B", "E", "D", "C"],
          "answer": 2,
          "explanation": "Positions 1–5 from left: A = 1, C = 3, B = 4. Seats 2 and 5 remain for D and E. Seat 2 is adjacent to C, so D must be at 5 and E at 2. Row: A E C B D. Extreme right = <b>D</b>."
        },
        {
          "q": "Six persons P, Q, R, S, T and U sit around a circular table facing the centre. P sits opposite Q. R is to the immediate left of P. S is second to the left of Q. U is to the immediate right of Q. Who sits opposite R?",
          "options": ["S", "U", "Q", "T"],
          "answer": 3,
          "explanation": "Facing centre: left = clockwise, right = anticlockwise. Number seats 1–6 clockwise. P = 1, Q = 4. R (immediate left of P) = 2. S (second to left of Q) = 6. U (immediate right of Q) = 3. T takes the last seat, 5. Seat opposite 2 is 5 → <b>T</b>."
        },
        {
          "q": "V, W, X, Y and Z sit in a row facing South. X sits in the middle. Y sits to the immediate right of X. Z sits at the extreme left end. V does not sit at any end. Who sits at the extreme right end?",
          "options": ["W", "V", "Z", "Y"],
          "answer": 0,
          "explanation": "Everyone faces South, so describe seats by their own right/left. X is in the middle (3rd). Y is immediately to X's right. Z is at the left end. V is not at an end, so V takes the remaining middle seat (between X and Z). The only seat left is the right end → <b>W</b>. Order from their right to left: W, Y, X, V, Z."
        },
        {
          "q": "Eight friends A, B, C, D, E, F, G and H sit around a circular table facing the centre at equal distances. B is third to the left of A. F is second to the right of B. D sits opposite A. C is to the immediate left of D. E is to the immediate left of F. G sits opposite B. Who sits opposite F?",
          "options": ["D", "C", "E", "G"],
          "answer": 1,
          "explanation": "Facing centre: left = clockwise. Seats 0–7 clockwise, A = 0. B = 3 (3 clockwise). F = 3 − 2 = 1 (right = anticlockwise). D = 4. C = 5 (clockwise of D). E = 2. G = 7 (opposite 3). H = 6. Opposite F (seat 1) is seat 5 = <b>C</b>."
        },
        {
          "q": "Seven persons J, K, L, M, N, O and P sit in a row facing North. M sits exactly in the middle. K sits at the extreme left end and P at the extreme right end. J is second to the right of M. L is to the immediate left of M. N is not adjacent to K. How many persons sit between O and J?",
          "options": ["2", "4", "3", "1"],
          "answer": 2,
          "explanation": "Positions 1–7 from left: K = 1, P = 7, M = 4, J = 6, L = 3. Seats 2 and 5 remain for N and O. Seat 2 is next to K, so N = 5, O = 2. Row: K O L M N J P. Between O (2) and J (6): L, M, N = <b>3</b> persons."
        },
        {
          "q": "A, B, C, D, E and F sit around a circular table facing <b>away from</b> the centre. F is to the immediate right of A. E is to the immediate left of A. C sits opposite A. B is to the immediate left of E. Who is second to the right of F?",
          "options": ["D", "B", "E", "C"],
          "answer": 3,
          "explanation": "Facing outward: right = clockwise, left = anticlockwise. Seats 0–5 clockwise, A = 0. F = 1, E = 5, C = 3, B = 4 (anticlockwise of E), so D = 2. Second to the right of F (clockwise from seat 1): seat 2 (D), then seat 3 → <b>C</b>."
        }
      ]
    },
    {
      "id": "syllogism",
      "name": "Syllogism",
      "notes": [
        {
          "heading": "Definite conclusion rules (two statements)",
          "points": [
            "All A are B + All B are C → All A are C (and Some C are A).",
            "All A are B + No B is C → No A is C.",
            "Some A are B + All B are C → Some A are C.",
            "Some A are B + No B is C → Some A are not C.",
            "No A is B + All B are C → Some C are not A.",
            "All A are B + Some B are C → <b>no definite conclusion</b> between A and C. Some + Some → no conclusion. No + No → no conclusion."
          ]
        },
        {
          "heading": "Conversions (immediate inferences)",
          "points": [
            "All A are B → Some A are B and Some B are A (never 'All B are A').",
            "Some A are B ↔ Some B are A. No A is B ↔ No B is A.",
            "'Some A are not B' cannot be converted."
          ]
        },
        {
          "heading": "Either–or and possibility",
          "points": [
            "Choose 'Either I or II' only when <b>neither follows definitely</b>, both have the same subject and predicate, and they form a complementary pair: Some + No, All + Some not, or Some + Some not.",
            "A 'possibility' conclusion follows if it is not contradicted by any valid diagram. A definite conclusion follows only if it is true in every diagram.",
            "Draw the minimum-overlap Venn diagram first; a conclusion that fails in it does not follow definitely."
          ]
        }
      ],
      "flashcards": [
        { "front": "All A are B; All B are C. Conclusion?", "back": "All A are C; Some C are A" },
        { "front": "Some A are B; No B is C. Conclusion?", "back": "Some A are not C" },
        { "front": "All A are B; Some B are C. Does 'Some A are C' follow?", "back": "No – no definite A–C relation" },
        { "front": "Can 'Some A are not B' be converted?", "back": "No" },
        { "front": "Conditions for 'Either I or II follows'", "back": "Neither follows individually, same subject & predicate, complementary pair (Some/No, All/Some not, Some/Some not)" },
        { "front": "No A is B; All B are C. Conclusion?", "back": "Some C are not A" }
      ],
      "questions": [
        {
          "q": "Statements: All cats are dogs. All dogs are birds.<br>Conclusions: I. All cats are birds. II. Some birds are cats.",
          "options": ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
          "answer": 2,
          "explanation": "All + All = All: All cats are birds (I follows). Converting 'All cats are birds' gives 'Some birds are cats' (II follows). <b>Both follow</b>."
        },
        {
          "q": "Statements: Some pens are books. No book is a table.<br>Conclusions: I. Some pens are not tables. II. No pen is a table.",
          "options": ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"],
          "answer": 0,
          "explanation": "Some + No = Some not: the pens that are books cannot be tables, so 'Some pens are not tables' is definite (I follows). Other pens may or may not be tables, so II is not definite. <b>Only I follows</b>. (Either–or is not applicable because I already follows.)"
        },
        {
          "q": "Statements: All roses are flowers. Some flowers are red.<br>Conclusions: I. Some roses are red. II. All roses are red.",
          "options": ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
          "answer": 3,
          "explanation": "All + Some gives no definite conclusion: the red flowers may lie completely outside the rose circle. So neither I nor II is definite. They are not a complementary pair (Some/All), so either–or does not apply. <b>Neither follows</b>."
        },
        {
          "q": "Statements: Some doctors are teachers. Some teachers are engineers.<br>Conclusions: I. Some doctors are engineers. II. No doctor is an engineer.",
          "options": ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"],
          "answer": 2,
          "explanation": "Some + Some gives no definite doctor–engineer relation, so neither I nor II follows by itself. But I (Some) and II (No) have the same subject and predicate and together cover all possibilities – one of them must be true. <b>Either I or II follows</b>."
        },
        {
          "q": "Statements: No chair is a table. All tables are desks.<br>Conclusions: I. No chair is a desk. II. Some desks are not chairs.",
          "options": ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
          "answer": 1,
          "explanation": "All tables are desks, and no table is a chair. So the desks that are tables are not chairs → 'Some desks are not chairs' (II follows). Chairs may still overlap the desks that are not tables, so I is not definite. <b>Only II follows</b>."
        },
        {
          "q": "Statements: All pencils are erasers. Some erasers are sharpeners. No sharpener is a ruler.<br>Conclusions: I. Some erasers are not rulers. II. Some pencils are sharpeners.",
          "options": ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
          "answer": 0,
          "explanation": "Some erasers are sharpeners + No sharpener is a ruler → Some erasers are not rulers (I follows). All pencils are erasers + Some erasers are sharpeners gives no definite pencil–sharpener relation, so II does not follow. <b>Only I follows</b>."
        }
      ]
    },
    {
      "id": "venn-diagrams",
      "name": "Venn Diagrams",
      "notes": [
        {
          "heading": "Identify the relationship between each pair",
          "points": [
            "Subset: one class fully inside another (India ⊂ Asia) → one circle inside another.",
            "Overlap: some members common (Doctors and Women) → intersecting circles.",
            "Disjoint: nothing common (Dogs and Cats) → separate circles.",
            "Decide the relation for all three pairs (A–B, B–C, A–C), then pick the diagram that shows all three correctly."
          ]
        },
        {
          "heading": "Standard 3-item patterns",
          "points": [
            "Concentric circles: India, Asia, Earth; Square, Rhombus, Quadrilateral.",
            "Two separate circles inside a bigger one: Dogs, Cats, Animals; Pen, Pencil, Stationery.",
            "One inside another + third intersecting both: Mothers ⊂ Women, Doctors overlapping both.",
            "One inside another + third separate: Iron ⊂ Metals, Oxygen separate.",
            "Three mutually intersecting: Singers, Dancers, Teachers."
          ]
        },
        {
          "heading": "Numerical Venn questions",
          "points": [
            "n(A ∪ B) = n(A) + n(B) − n(A ∩ B); Neither = Total − n(A ∪ B).",
            "Three sets: fill the centre (A∩B∩C) first, then 'exactly two' regions, then 'only' regions.",
            "Read carefully: 'only A', 'A but not B', 'at least two', 'exactly two' are different regions."
          ]
        }
      ],
      "flashcards": [
        { "front": "Diagram for: India, Asia, Earth", "back": "Three concentric circles" },
        { "front": "Diagram for: Dogs, Cats, Animals", "back": "Two separate circles inside a larger circle" },
        { "front": "Diagram for: Mothers, Women, Doctors", "back": "Mothers inside Women; Doctors circle intersecting both" },
        { "front": "Diagram for: Iron, Metals, Oxygen", "back": "Iron inside Metals; Oxygen a separate circle" },
        { "front": "Formula for two sets", "back": "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)" },
        { "front": "Diagram for: Square, Rhombus, Quadrilateral", "back": "Three concentric circles (every square is a rhombus, every rhombus is a quadrilateral)" }
      ],
      "questions": [
        {
          "q": "Which diagram best represents the relationship between: Mothers, Doctors, Women?",
          "options": ["Three concentric circles (each inside the next)", "One circle inside another, and a third circle intersecting both", "Three separate (non-overlapping) circles", "Two separate circles, both inside a third larger circle"],
          "answer": 1,
          "explanation": "All mothers are women → Mothers circle inside Women circle. Some doctors are women and some are mothers, but some doctors are men → the Doctors circle intersects both and also extends outside Women. Hence <b>one inside another, third intersecting both</b>."
        },
        {
          "q": "Which diagram best represents the relationship between: India, Asia, Earth?",
          "options": ["Two separate circles, both inside a third larger circle", "One circle inside another, and a third circle separate from both", "Three concentric circles (each inside the next)", "Three mutually intersecting circles"],
          "answer": 2,
          "explanation": "India is a part of Asia, and Asia is a part of the Earth: India ⊂ Asia ⊂ Earth → <b>three concentric circles</b>."
        },
        {
          "q": "Which diagram best represents the relationship between: Dogs, Cats, Animals?",
          "options": ["One circle inside another, and a third circle intersecting both", "Three concentric circles (each inside the next)", "Three separate (non-overlapping) circles", "Two separate circles, both inside a third larger circle"],
          "answer": 3,
          "explanation": "Dogs and cats are both animals, but no dog is a cat. So <b>two separate circles (Dogs, Cats) inside a larger circle (Animals)</b>."
        },
        {
          "q": "In a group of 60 people, 35 like tea, 30 like coffee and 10 like neither. How many people like both tea and coffee?",
          "options": ["15", "10", "20", "5"],
          "answer": 0,
          "explanation": "People who like at least one = 60 − 10 = 50. n(T ∪ C) = n(T) + n(C) − both → 50 = 35 + 30 − both → both = <b>15</b>."
        },
        {
          "q": "In a Venn diagram, circle A = Teachers, circle B = Singers, circle C = Dancers. The regions contain: only A = 12, only B = 9, only C = 7, A and B only = 5, B and C only = 4, A and C only = 3, all three = 2. How many persons are singers or dancers but NOT teachers?",
          "options": ["22", "16", "20", "24"],
          "answer": 2,
          "explanation": "Regions outside A but inside B or C: only B (9) + only C (7) + B and C only (4) = <b>20</b>. The centre region (2) is excluded because those persons are teachers."
        },
        {
          "q": "Which diagram best represents the relationship between: Metals, Iron, Oxygen?",
          "options": ["One circle inside another, and a third circle separate from both", "Three separate (non-overlapping) circles", "One circle inside another, and a third circle intersecting both", "Two separate circles, both inside a third larger circle"],
          "answer": 0,
          "explanation": "Iron is a metal → Iron circle inside Metals circle. Oxygen is a non-metal (a gas) → a separate circle. Hence <b>one inside another, third separate</b>."
        }
      ]
    },
    {
      "id": "math-operations",
      "name": "Mathematical Operations & Missing Numbers",
      "notes": [
        {
          "heading": "Symbol substitution",
          "points": [
            "First rewrite the whole expression with the real signs, then solve using <b>BODMAS</b> (Brackets, Of, Division, Multiplication, Addition, Subtraction). ÷ and × are done left to right before + and −; then + and − are done left to right (e.g. 12 − 5 + 2 = 9, not 5).",
            "Trap: do not solve while substituting – write the converted expression completely first."
          ]
        },
        {
          "heading": "Interchanging signs / balancing equations",
          "points": [
            "Apply each option's swap to the whole equation and evaluate with BODMAS; only one option should balance.",
            "Shortcut: check the option that makes a division exact first; options giving fractions are usually wrong.",
            "For '*' replacement questions, substitute signs in the given order, left to right."
          ]
        },
        {
          "heading": "Missing number patterns",
          "points": [
            "Rows/columns: a² + b², a × b − (a + b), (a + b)(a − b), a × b + c, sum of digits, etc.",
            "Verify the rule on <b>all</b> complete rows/columns before applying it to the incomplete one.",
            "Custom operators: 'a $ b = (a + b)(a − b)' – find the rule from the given examples."
          ]
        }
      ],
      "flashcards": [
        { "front": "BODMAS order", "back": "Brackets → Of → Division → Multiplication → Addition → Subtraction (÷ and × left to right first, then + and − left to right)" },
        { "front": "If 5 ? 3 = 34 and 6 ? 2 = 40, the rule is?", "back": "a² + b² (25 + 9, 36 + 4)" },
        { "front": "7 $ 3 = 40, 9 $ 5 = 56. Rule?", "back": "(a + b)(a − b) = a² − b²" },
        { "front": "First step in sign-substitution questions", "back": "Rewrite the full expression with the real signs, then apply BODMAS" },
        { "front": "24 ÷ 6 × 3 + 5 = ?", "back": "17 (4 × 3 = 12, + 5)" }
      ],
      "questions": [
        {
          "q": "If '+' means '×', '−' means '÷', '×' means '−' and '÷' means '+', find the value of: 16 − 4 + 3 × 5 ÷ 2",
          "options": ["9", "7", "11", "13"],
          "answer": 0,
          "explanation": "Rewrite: 16 ÷ 4 × 3 − 5 + 2. BODMAS: 16 ÷ 4 = 4; 4 × 3 = 12; 12 − 5 + 2 = <b>9</b>."
        },
        {
          "q": "Which two signs should be interchanged to make the equation correct?<br>18 + 6 ÷ 3 × 2 − 4 = 5",
          "options": ["× and −", "+ and ÷", "+ and −", "÷ and ×"],
          "answer": 1,
          "explanation": "Swap + and ÷: 18 ÷ 6 + 3 × 2 − 4 = 3 + 6 − 4 = 5 ✔.<br>Check others: × and − → 18 + 2 − 8 = 12; + and − → 18 − 4 + 4 = 18; ÷ and × → 18 + 9 − 4 = 23. Only <b>+ and ÷</b> works."
        },
        {
          "q": "Find the missing number.<br>Row 1: 5, 3, 34<br>Row 2: 6, 2, 40<br>Row 3: 7, 4, ?",
          "options": ["56", "60", "53", "65"],
          "answer": 3,
          "explanation": "Third number = (first)² + (second)²: 25 + 9 = 34 ✔, 36 + 4 = 40 ✔. Row 3: 49 + 16 = <b>65</b>."
        },
        {
          "q": "If 7 $ 3 = 40 and 9 $ 5 = 56, then 11 $ 6 = ?",
          "options": ["77", "96", "85", "65"],
          "answer": 2,
          "explanation": "Rule: (a + b) × (a − b). 7 $ 3 = 10 × 4 = 40 ✔; 9 $ 5 = 14 × 4 = 56 ✔. 11 $ 6 = 17 × 5 = <b>85</b> (= 121 − 36)."
        },
        {
          "q": "Find the missing number.<br>Row 1: 6, 4, 14<br>Row 2: 7, 5, 23<br>Row 3: 8, 6, ?",
          "options": ["36", "32", "48", "34"],
          "answer": 3,
          "explanation": "Third number = (a × b) − (a + b): 24 − 10 = 14 ✔; 35 − 12 = 23 ✔. Row 3: 48 − 14 = <b>34</b>."
        },
        {
          "q": "Select the correct combination of mathematical signs to replace the * signs (in order) and balance the equation:<br>24 * 6 * 3 * 5 = 17",
          "options": ["×, ÷, −", "+, ÷, ×", "÷, ×, +", "−, ×, ÷"],
          "answer": 2,
          "explanation": "÷, ×, +: 24 ÷ 6 × 3 + 5 = 4 × 3 + 5 = 17 ✔.<br>Others: 24 × 6 ÷ 3 − 5 = 43; 24 + 6 ÷ 3 × 5 = 24 + 10 = 34; 24 − 6 × 3 ÷ 5 = 20.4. Answer <b>÷, ×, +</b>."
        }
      ]
    },
    {
      "id": "calendar-clock",
      "name": "Calendar & Clock",
      "notes": [
        {
          "heading": "Odd days method (calendar)",
          "points": [
            "Ordinary year = 365 days = 1 odd day; leap year = 2 odd days.",
            "Leap year: divisible by 4; a century year must be divisible by 400 (1900 not leap, 2000 leap).",
            "Century odd days: 100 years = 5, 200 years = 3, 300 years = 1, 400 years = 0.",
            "Month odd days: Jan 3, Feb 0 (leap 1), Mar 3, Apr 2, May 3, Jun 2, Jul 3, Aug 3, Sep 2, Oct 3, Nov 2, Dec 3.",
            "Day code: 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday."
          ]
        },
        {
          "heading": "Same date next year and repeating calendars",
          "points": [
            "Same date one year later moves by 1 day (2 days if 29 February falls in between).",
            "A calendar repeats when the total odd days in between is a multiple of 7 and both years are of the same type (leap/ordinary).",
            "Shortcut for ordinary years: leap year + 1 → repeats after 6 years; leap + 2 → 11 years; leap + 3 → 11 years. A leap year repeats after 28 years (within the same century)."
          ]
        },
        {
          "heading": "Clock formulas",
          "points": [
            "Angle between hands = |30H − 5.5M| degrees (if > 180°, subtract from 360°).",
            "Minute hand moves 6° per minute; hour hand 0.5° per minute; relative speed 5.5° per minute.",
            "Between H and H+1 o'clock the hands coincide at 60H/11 minutes past H (e.g. 240/11 = 21 9/11 min past 4). They coincide every 65 5/11 minutes.",
            "In 12 hours: coincide 11 times, opposite 11 times, right angle 22 times. In a day: 22, 22 and 44 times."
          ]
        },
        {
          "heading": "Mirror and water image of a clock",
          "points": [
            "Mirror time = 11:60 − given time (if the given time is 12:xx, use 23:60 − time). Example: 4:20 → 7:40.",
            "Water image time (standard exam formula) = 18:30 − given time (if the result exceeds 12, subtract 12)."
          ]
        }
      ],
      "flashcards": [
        { "front": "Odd days in 100, 200, 300, 400 years", "back": "5, 3, 1, 0" },
        { "front": "Is 1900 a leap year? 2000?", "back": "1900 – No; 2000 – Yes (century must be divisible by 400)" },
        { "front": "Angle between hands formula", "back": "|30H − 5.5M|" },
        { "front": "Mirror image time of 3:15", "back": "11:60 − 3:15 = 8:45" },
        { "front": "How many times do the hands form a right angle in a day?", "back": "44 times" },
        { "front": "How often do the hands coincide?", "back": "Every 65 5/11 minutes (11 times in 12 hours)" },
        { "front": "Month odd days (Jan–Dec, ordinary year)", "back": "3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3" }
      ],
      "questions": [
        {
          "q": "What is the angle between the hour hand and the minute hand of a clock at 3:40?",
          "options": ["120°", "130°", "140°", "150°"],
          "answer": 1,
          "explanation": "Angle = |30H − 5.5M| = |30×3 − 5.5×40| = |90 − 220| = <b>130°</b>. (Check: minute hand at 240°, hour hand at 90° + 20° = 110°; difference 130°.)"
        },
        {
          "q": "If 15 August 2022 was a Monday, what day of the week was 15 August 2023?",
          "options": ["Sunday", "Monday", "Wednesday", "Tuesday"],
          "answer": 3,
          "explanation": "From 15 Aug 2022 to 15 Aug 2023 the only February is Feb 2023, which has 28 days (2023 is not a leap year). So the gap is 365 days = 52 weeks + 1 odd day. Monday + 1 = <b>Tuesday</b>."
        },
        {
          "q": "What day of the week was 26 January 1950?",
          "options": ["Thursday", "Friday", "Wednesday", "Saturday"],
          "answer": 0,
          "explanation": "Count odd days for the complete years up to 1949, then add the days of January 1950.<br>First 1600 years → 0. Next 300 years (1601–1900) → 1.<br>1901–1949: 49 years with 12 leap years (1904 … 1948) → 49 + 12 = 61 → 61 mod 7 = 5.<br>January 1950: 26 days → 26 mod 7 = 5.<br>Total = 0 + 1 + 5 + 5 = 11 → 11 mod 7 = 4 → <b>Thursday</b>."
        },
        {
          "q": "The mirror image of a clock (mirror placed vertically) shows the time 4:20. What is the actual time?",
          "options": ["8:40", "7:20", "7:40", "8:20"],
          "answer": 2,
          "explanation": "Actual time = 11:60 − 4:20 = <b>7:40</b>. (The relation works both ways: the mirror image of 7:40 is 4:20.)"
        },
        {
          "q": "The calendar of the year 2019 will be the same as that of which year?",
          "options": ["2025", "2027", "2029", "2030"],
          "answer": 3,
          "explanation": "2019 is ordinary. Add odd days year by year: 2019 (1), 2020 (2) → 3, 2021 → 4, 2022 → 5, 2023 → 6, 2024 (2) → 8 ≡ 1, 2025 → 2, 2026 → 3, 2027 → 4, 2028 (2) → 6, 2029 → 7 ≡ 0. So the next year with the same calendar is <b>2030</b> (also ordinary). Shortcut: 2019 = leap year 2016 + 3 → repeats after 11 years."
        },
        {
          "q": "At what time between 4 o'clock and 5 o'clock will the hour and minute hands coincide?",
          "options": ["20 minutes past 4", "21 9/11 minutes past 4", "21 3/11 minutes past 4", "22 2/11 minutes past 4"],
          "answer": 1,
          "explanation": "At 4:00 the minute hand is 20 minute-spaces behind the hour hand. It gains 55 minute-spaces in 60 minutes, so time needed = 20 × 60/55 = 240/11 = <b>21 9/11 minutes</b> past 4."
        }
      ]
    },
    {
      "id": "word-arrangement",
      "name": "Word Arrangement & Dictionary Order",
      "notes": [
        {
          "heading": "Dictionary order",
          "points": [
            "Compare letter by letter from the left; the first different letter decides the order.",
            "Group words by their common prefix (e.g. Mo-, Pres-, Acc-) and then compare the next letter.",
            "If one word is the beginning of another (Man, Mango), the shorter word comes first.",
            "Trap: count positions carefully when asked 'which word comes third/last'."
          ]
        },
        {
          "heading": "Logical sequence of words",
          "points": [
            "Common orders: life cycle (Egg → Larva → Pupa → Adult), small to large (units, family → community → nation), process (Sowing → Growing → Harvesting), events in time.",
            "Find the first and the last item first; the middle order becomes easier."
          ]
        },
        {
          "heading": "Forming words from a given word",
          "points": [
            "Count each letter's frequency in the given word; a word can be formed only if no letter is needed more times than available.",
            "EXAMINATION: E1, X1, A2, M1, I2, N2, T1, O1 – so words needing two O's (MOTION) or two E's cannot be formed."
          ]
        }
      ],
      "flashcards": [
        { "front": "Which comes first: Mother or Motive?", "back": "Mother (4th letter h comes before i)" },
        { "front": "Life cycle of a butterfly", "back": "Egg → Caterpillar (Larva) → Pupa → Butterfly" },
        { "front": "Metric length units, smallest to largest", "back": "Millimetre → Centimetre → Metre → Decametre → Kilometre" },
        { "front": "Can MOTION be formed from EXAMINATION?", "back": "No – MOTION needs two O's; EXAMINATION has only one." },
        { "front": "Dictionary rule when one word is a prefix of another", "back": "The shorter word comes first (e.g. Car before Card)" }
      ],
      "questions": [
        {
          "q": "Arrange the words in the order in which they appear in an English dictionary:<br>1. Mountain 2. Mother 3. Motive 4. Mouse 5. Mortal",
          "options": ["5, 2, 3, 1, 4", "5, 3, 2, 1, 4", "2, 3, 5, 1, 4", "5, 2, 3, 4, 1"],
          "answer": 0,
          "explanation": "All start with 'Mo'. Third letters: Mortal (r), Mother (t), Motive (t), Mountain (u), Mouse (u). Alphabetical order r, t, u.<br>Mother vs Motive (4th letter): h comes before i → Mother first. Mountain vs Mouse: n comes before s → Mountain first.<br>Order: Mortal, Mother, Motive, Mountain, Mouse = <b>5, 2, 3, 1, 4</b>."
        },
        {
          "q": "Which word will come third in the English dictionary order?<br>Present, Preserve, Pressure, Prestige, Presume",
          "options": ["Preserve", "Prestige", "Pressure", "Presume"],
          "answer": 2,
          "explanation": "All start with 'Pres'. Fifth letters: Present (e-n), Preserve (e-r), Pressure (s), Prestige (t), Presume (u). Order: Present, Preserve, <b>Pressure</b>, Prestige, Presume. Third = Pressure."
        },
        {
          "q": "Select the correct logical sequence:<br>1. Pupa 2. Egg 3. Butterfly 4. Caterpillar",
          "options": ["2, 1, 4, 3", "4, 2, 1, 3", "2, 4, 3, 1", "2, 4, 1, 3"],
          "answer": 3,
          "explanation": "Life cycle of a butterfly: Egg → Caterpillar (larva) → Pupa → Butterfly = <b>2, 4, 1, 3</b>."
        },
        {
          "q": "Arrange in increasing order of length:<br>1. Centimetre 2. Kilometre 3. Millimetre 4. Metre 5. Decametre",
          "options": ["3, 1, 5, 4, 2", "3, 1, 4, 5, 2", "1, 3, 4, 5, 2", "3, 4, 1, 5, 2"],
          "answer": 1,
          "explanation": "Millimetre (0.001 m) → Centimetre (0.01 m) → Metre (1 m) → Decametre (10 m) → Kilometre (1000 m) = <b>3, 1, 4, 5, 2</b>."
        },
        {
          "q": "Which word CANNOT be formed using the letters of the word EXAMINATION?",
          "options": ["NATION", "ANIMATE", "MOTION", "TAXI"],
          "answer": 2,
          "explanation": "EXAMINATION has E1, X1, A2, M1, I2, N2, T1, O1.<br>NATION: N, A, T, I, O, N – possible (two N's available). ANIMATE: A2, N, I, M, T, E – possible. TAXI – possible. <b>MOTION</b> needs two O's but there is only one → cannot be formed."
        },
        {
          "q": "Which word will come LAST in the English dictionary order?<br>Accept, Access, Accident, Accord, Account",
          "options": ["Account", "Accord", "Accident", "Access"],
          "answer": 0,
          "explanation": "All start with 'Acc'. Fourth letters: e (Accept, Access), i (Accident), o (Accord, Account). Among the 'Acco' words: Accord (r) vs Account (u) → r comes before u. Order: Accept, Access, Accident, Accord, <b>Account</b>."
        }
      ]
    },
    {
      "id": "non-verbal-tips",
      "name": "Non-verbal Reasoning Tips",
      "notes": [
        {
          "heading": "About non-verbal questions in the exam",
          "points": [
            "SSC CGL Tier 1 regularly includes figure-based questions: mirror image, water image, paper folding and cutting, embedded (hidden) figures, figure completion, counting triangles/squares, cube and dice. This app is text-only, so learn the techniques here and practise figures from previous papers.",
            "Most figure questions are solved by <b>eliminating options</b> using one clear feature (a dot, a shaded corner, the direction of an arrow) rather than checking the whole figure."
          ]
        },
        {
          "heading": "Mirror and water images",
          "points": [
            "Mirror image (vertical mirror on the right/left): left and right swap, top and bottom stay the same. Letters that look the same in a vertical mirror: A, H, I, M, O, T, U, V, W, X, Y.",
            "Water image (horizontal mirror below): top and bottom swap, left and right stay the same. Letters that look the same: B, C, D, E, H, I, K, O, X.",
            "Tip: follow one feature (e.g. a dot at the top-left). In a mirror image it moves to top-right; in a water image it moves to bottom-left.",
            "Clock mirror time = 11:60 − time; water image time = 18:30 − time."
          ]
        },
        {
          "heading": "Paper folding & cutting, embedded figures",
          "points": [
            "Unfold step by step in reverse order. Each hole or cut is reflected across the fold line, so the count doubles with each unfolding.",
            "A paper folded twice (into quarters) with one punch gives 4 holes; folded three times gives 8.",
            "Embedded figures: identify a distinctive angle or edge of the given shape and search for it in each option; the shape must appear in the same orientation (rotation not allowed unless stated)."
          ]
        },
        {
          "heading": "Counting figures, cubes and dice",
          "points": [
            "If a triangle has n lines in total from one vertex to the opposite side (counting its two sides), triangles = C(n, 2); e.g. 2 inner lines → 4 lines → 6 triangles.",
            "Squares in an n × n grid = 1² + 2² + … + n². Rectangles in an m × n grid = C(m+1, 2) × C(n+1, 2).",
            "Painted cube of side n cut into unit cubes: 3 faces painted = 8, 2 faces = 12(n − 2), 1 face = 6(n − 2)², no face = (n − 2)³.",
            "Dice: faces seen together in any view are adjacent, never opposite. The face adjacent to four known faces is opposite the remaining one. In a standard die opposite faces add up to 7."
          ]
        }
      ],
      "flashcards": [
        { "front": "Letters unchanged in a vertical mirror", "back": "A, H, I, M, O, T, U, V, W, X, Y" },
        { "front": "Letters unchanged in a water image", "back": "B, C, D, E, H, I, K, O, X" },
        { "front": "Squares in a 4 × 4 grid", "back": "16 + 9 + 4 + 1 = 30" },
        { "front": "Painted cube, side 5 → cubes with exactly one face painted", "back": "6 × (5 − 2)² = 54" },
        { "front": "Paper folded twice and punched once – holes after unfolding?", "back": "4" },
        { "front": "Standard die: sum of opposite faces", "back": "7 (1–6, 2–5, 3–4)" },
        { "front": "In a mirror image, a dot at the top-left corner moves to?", "back": "Top-right corner (in a water image it would move to bottom-left)" },
        { "front": "Rectangles (including squares) in a 3 × 3 grid", "back": "C(4,2) × C(4,2) = 6 × 6 = 36" }
      ],
      "questions": [
        {
          "q": "Three different views of the same die show these visible faces: View 1 – 1, 2, 3; View 2 – 1, 3, 5; View 3 – 1, 2, 6. Which number is opposite 1?",
          "options": ["5", "6", "4", "3"],
          "answer": 2,
          "explanation": "Faces seen together are adjacent. 1 appears with 2, 3 (View 1), 5 (View 2) and 6 (View 3). So 1 is adjacent to 2, 3, 5 and 6. The only remaining face is <b>4</b>, which must be opposite 1."
        },
        {
          "q": "Which of the following words (written in capital letters) will look exactly the same in its water image?",
          "options": ["BRIDE", "CHOKE", "PHONE", "WHITE"],
          "answer": 1,
          "explanation": "A water image flips top and bottom but keeps left–right order, so every letter must be symmetric about a horizontal line. C, H, O, K, E all are → <b>CHOKE</b> looks the same. BRIDE has R, PHONE has P and N, WHITE has W and T – these change."
        },
        {
          "q": "A cube of side 5 cm is painted on all faces and then cut into cubes of side 1 cm. How many small cubes have exactly one face painted?",
          "options": ["36", "27", "8", "54"],
          "answer": 3,
          "explanation": "n = 5. Cubes with exactly one face painted = 6(n − 2)² = 6 × 3² = <b>54</b>. (Two faces = 12 × 3 = 36, three faces = 8, none = 3³ = 27 – these are the traps.)"
        },
        {
          "q": "A clock shows the time 2:35. What time will its mirror image (vertical mirror) show?",
          "options": ["9:25", "10:25", "9:35", "10:35"],
          "answer": 0,
          "explanation": "Mirror time = 11:60 − 2:35 = <b>9:25</b>."
        },
        {
          "q": "In triangle ABC, two straight lines are drawn from vertex A to two different points D and E on side BC. How many triangles are there in the figure?",
          "options": ["5", "4", "3", "6"],
          "answer": 3,
          "explanation": "Lines from A to side BC: AB, AD, AE, AC = 4 lines. Any 2 of them with BC form a triangle: C(4, 2) = <b>6</b> (ABD, ADE, AEC, ABE, ADC, ABC)."
        },
        {
          "q": "A large square is divided into a 4 × 4 grid of equal small squares. How many squares of all sizes are there in total?",
          "options": ["16", "30", "25", "20"],
          "answer": 1,
          "explanation": "1×1 squares: 16, 2×2: 9, 3×3: 4, 4×4: 1. Total = 16 + 9 + 4 + 1 = <b>30</b>."
        }
      ]
    },
    {
      "id": "statement-conclusion",
      "name": "Statement & Conclusion / Critical Thinking",
      "notes": [
        {
          "heading": "Statement & Conclusion – rules",
          "points": [
            "A conclusion follows only if it is <b>definitely true</b> on the basis of the statement. Use common sense, but do not add outside facts.",
            "Take the statement as true even if it seems false in real life.",
            "Conclusions with extreme words – <b>only, all, always, never, definitely, best, must</b> – usually do not follow unless the statement itself says so.",
            "Guesses about the future ('will surely happen') and reasons not given in the statement usually do not follow.",
            "Standard options: Only I follows / Only II follows / Either I or II follows / Neither I nor II follows / Both I and II follow.",
            "Choose <b>'Either I or II'</b> when the two conclusions are complementary: one of them must be true, but the statement does not tell you which."
          ]
        },
        {
          "heading": "Statement & Assumption",
          "points": [
            "An assumption is something the speaker <b>takes for granted</b> without saying it.",
            "Negation test: turn the assumption into its opposite. If the statement then becomes pointless, the assumption is implicit.",
            "An advertisement assumes that people will read or see it and that it will influence buyers.",
            "Advice, appeals and orders assume they will be followed and will achieve their purpose.",
            "'Do X to achieve Y' assumes X is possible and will help achieve Y. Assumptions with 'only', 'best' or 'all' are usually not implicit."
          ]
        },
        {
          "heading": "Course of Action",
          "points": [
            "A course of action is a practical step that <b>solves, reduces or prevents</b> the problem in the statement.",
            "It follows if it is practical, related to the problem, and within the power of the authority concerned.",
            "Extreme steps (banning, shutting down, abolishing, punishing everyone) generally do not follow.",
            "Short-term relief (rescue, medical aid) and long-term measures (inquiry, awareness drives) can both follow together.",
            "If carelessness caused the problem, action is taken against those responsible, not against innocent people."
          ]
        },
        {
          "heading": "Arguments, Cause & Effect, Inferences",
          "points": [
            "<b>Strong argument</b>: directly related to the question, important, and backed by facts or established truth.",
            "<b>Weak argument</b>: superficial, based on tradition, 'others do it', personal opinion, or exaggeration.",
            "Cause & Effect: the cause happens first and leads to the effect. Ask 'Did I lead to II?' and 'Did II lead to I?'.",
            "Two statements can also be independent causes, independent effects, or both effects of a common cause that is not stated.",
            "Inference questions: choose what is <b>definitely</b> or <b>probably</b> true from the passage. Never add new facts."
          ]
        }
      ],
      "flashcards": [
        {
          "front": "When does a conclusion 'follow'?",
          "back": "When it is definitely true from the statement alone (treat the statement as true)."
        },
        {
          "front": "Negation test for assumptions",
          "back": "Turn the assumption into its opposite. If the statement becomes pointless, the assumption is implicit."
        },
        {
          "front": "When do you choose 'Either I or II follows'?",
          "back": "When the two conclusions are complementary (one must be true, both cannot be) and the statement does not say which."
        },
        {
          "front": "Words that usually make a conclusion invalid",
          "back": "Only, all, always, never, definitely, best, must – unless they appear in the statement."
        },
        {
          "front": "Does an advertisement assume people read it?",
          "back": "Yes. Every advertisement assumes it will be read or seen and will influence people."
        },
        {
          "front": "Features of a valid course of action",
          "back": "Practical, related to the problem, within the authority's power, not extreme."
        },
        {
          "front": "Is 'Ban it completely' usually a valid course of action?",
          "back": "No. Extreme or impractical actions usually do not follow."
        },
        {
          "front": "What makes an argument strong?",
          "back": "It is directly related, important, and supported by facts or established truth."
        },
        {
          "front": "Is 'Yes, because other countries do it' a strong argument?",
          "back": "No. Arguments based on copying others or on tradition are weak."
        },
        {
          "front": "Cause & Effect: 'effects of a common cause'",
          "back": "Both statements result from a third event that is not given, e.g. 'Schools closed' and 'Roads empty' – both caused by a curfew."
        },
        {
          "front": "Standard SSC options for two conclusions",
          "back": "Only I / Only II / Either I or II / Neither I nor II / Both I and II."
        }
      ],
      "questions": [
        {
          "q": "Statement: The government has made helmets compulsory for both the rider and the pillion rider of two-wheelers.<br>Conclusions:<br>I. Wearing a helmet reduces the risk of head injury in an accident.<br>II. People who wear helmets never meet with accidents.",
          "options": [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Both I and II follow",
            "Neither I nor II follows"
          ],
          "answer": 0,
          "explanation": "The rule only makes sense if helmets protect against head injury, so I follows. II uses the extreme word 'never' and does not follow."
        },
        {
          "q": "Statement: 'Use Glow toothpaste for whiter teeth.' – an advertisement in a newspaper.<br>Assumptions:<br>I. People read advertisements in newspapers.<br>II. People want to have whiter teeth.",
          "options": [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Both I and II are implicit",
            "Neither I nor II is implicit"
          ],
          "answer": 2,
          "explanation": "An advertisement assumes it will be read (I). It also assumes people want the promised benefit, whiter teeth (II). So both are implicit."
        },
        {
          "q": "Statement: A large number of students in a district failed the Class 10 mathematics examination this year.<br>Courses of action:<br>I. The mathematics examination should be abolished in the district.<br>II. The education department should find out the reasons for the poor results and arrange remedial classes.",
          "options": [
            "Only I follows",
            "Only II follows",
            "Both I and II follow",
            "Neither I nor II follows"
          ],
          "answer": 1,
          "explanation": "Abolishing the exam is extreme and does not solve the problem. Finding the causes and holding remedial classes is practical, so only II follows."
        },
        {
          "q": "Statement: Ravi scored the highest marks in his class in the half-yearly examination.<br>Conclusions:<br>I. Ravi will score the highest marks in the final examination also.<br>II. Ravi's classmates did not study for the examination.",
          "options": [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Both I and II follow",
            "Neither I nor II follows"
          ],
          "answer": 3,
          "explanation": "I is a guess about the future. II blames the others without any basis in the statement. Neither follows."
        },
        {
          "q": "Statement: Should Sunday be made a working day for all offices?<br>Arguments:<br>I. Yes, people only waste their time on Sundays.<br>II. No, Sunday has always been a holiday.",
          "options": [
            "Only argument I is strong",
            "Only argument II is strong",
            "Both I and II are strong",
            "Neither I nor II is strong"
          ],
          "answer": 3,
          "explanation": "I is an over-generalisation ('only waste'). II rests only on tradition ('always been'). Both arguments are weak."
        },
        {
          "q": "Statements:<br>I. The prices of vegetables in the city have risen sharply.<br>II. Heavy rains have damaged crops in the nearby farming areas.",
          "options": [
            "Statement I is the cause and statement II is its effect",
            "Statement II is the cause and statement I is its effect",
            "Both statements are independent causes",
            "Both statements are effects of some common cause"
          ],
          "answer": 1,
          "explanation": "Crop damage (II) cuts the supply of vegetables, which pushes prices up (I). So II is the cause and I is the effect."
        },
        {
          "q": "Statement: The company will either increase the salaries of its employees or give them a bonus this year, but not both.<br>Conclusions:<br>I. The employees will get a salary increase this year.<br>II. The employees will get a bonus this year.",
          "options": [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows"
          ],
          "answer": 2,
          "explanation": "Exactly one of the two will happen, but the statement does not say which. I and II are complementary, so 'Either I or II' follows."
        },
        {
          "q": "Statement: The school has decided to hold extra classes on Saturdays to finish the syllabus before the examinations.<br>Assumptions:<br>I. The syllabus may not be finished in the regular classes before the examinations.<br>II. Students do not like coming to school on Saturdays.",
          "options": [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Both I and II are implicit",
            "Neither I nor II is implicit"
          ],
          "answer": 0,
          "explanation": "Extra classes are needed only if the regular classes are not enough, so I is implicit. The students' likes and dislikes are not part of the decision, so II is not."
        }
      ]
    },
    {
      "id": "emotional-social-intelligence",
      "name": "Emotional & Social Intelligence",
      "notes": [
        {
          "heading": "Emotional intelligence – basics",
          "points": [
            "Emotional intelligence (EI or EQ) is the ability to recognise, understand and manage your own emotions and those of others.",
            "The formal model was given by Peter Salovey and John Mayer (1990). <b>Daniel Goleman</b> made it popular with his 1995 book 'Emotional Intelligence'.",
            "Goleman's five components: <b>self-awareness, self-regulation, motivation, empathy, social skills</b>.",
            "Social intelligence is the ability to understand people and act wisely in human relations. The idea is linked to <b>Edward Thorndike</b> (1920).",
            "IQ measures thinking ability, while EQ is about handling emotions and relationships. High EQ is linked to good leadership and teamwork."
          ]
        },
        {
          "heading": "How to pick the best response",
          "points": [
            "Choose the response that is <b>calm, responsible, constructive and aimed at solving the problem</b>.",
            "Reject options that are aggressive (shouting, revenge), passive (ignoring, doing nothing), escapist (quitting, running away) or that shift blame.",
            "Prefer talking to the person concerned directly and politely before taking the matter higher.",
            "Use proper channels: inform your senior or the authorities when the matter is beyond your control.",
            "Balance empathy with rules. Help the person, but do not break the law or ethics."
          ]
        },
        {
          "heading": "Workplace situations",
          "points": [
            "Your own mistake: admit it promptly, inform your senior, correct it and learn from it.",
            "A colleague takes credit for your work: first discuss it with them privately, then clarify politely with facts if needed.",
            "A team member is struggling: talk with empathy, offer help, and adjust the work with the team leader's knowledge.",
            "Criticism from your boss: listen calmly, accept the valid points and improve. Do not argue in public.",
            "Conflict between two teammates: listen to both sides, focus on the common goal and help them settle it.",
            "Tight deadline: prioritise, plan, and tell people early. Ask for help instead of silently missing the deadline."
          ]
        },
        {
          "heading": "Social situations",
          "points": [
            "Road accident: call an ambulance or 112 (India's national emergency number) and give basic first aid. Do not leave the victim unattended.",
            "Lost child: comfort the child, stay with them, and hand them over to the police, station staff or announcement desk.",
            "Friend upset after a failure: listen, encourage them, and suggest professional help if needed. Never mock or ignore them.",
            "An elderly or differently-abled person needs help: offer it politely and respectfully.",
            "Rumours or fake news: check before sharing, and do not forward unverified messages."
          ]
        }
      ],
      "flashcards": [
        {
          "front": "Who popularised 'Emotional Intelligence'?",
          "back": "Daniel Goleman, in his 1995 book 'Emotional Intelligence'."
        },
        {
          "front": "Goleman's five components of EI",
          "back": "Self-awareness, self-regulation, motivation, empathy, social skills."
        },
        {
          "front": "Who gave the first formal model of emotional intelligence?",
          "back": "Peter Salovey and John Mayer (1990)."
        },
        {
          "front": "The concept of 'social intelligence' is linked to?",
          "back": "Edward Thorndike (1920)."
        },
        {
          "front": "Self-regulation means?",
          "back": "Controlling your impulses and emotions, and staying calm and balanced under pressure."
        },
        {
          "front": "Empathy vs sympathy",
          "back": "Empathy = understanding someone's feelings from their point of view. Sympathy = feeling pity or sorrow for them."
        },
        {
          "front": "Options to reject in situation questions",
          "back": "Aggressive, passive (do nothing), escapist (quit or run away) and blame-shifting responses."
        },
        {
          "front": "You made a mistake at work – best response?",
          "back": "Admit it promptly, inform your senior and correct it."
        },
        {
          "front": "You see an accident victim – best response?",
          "back": "Call an ambulance or 112 and give basic first aid until help arrives."
        },
        {
          "front": "Found a lost child in a crowd – best response?",
          "back": "Comfort the child and hand them over to the police or officials so the parents can be traced."
        }
      ],
      "questions": [
        {
          "q": "While travelling, you see an injured person lying on the road after an accident. What is the most appropriate action?",
          "options": [
            "Take photos and post them on social media to alert others",
            "Move on, since it is the job of the police",
            "Call an ambulance or the emergency number and give basic first aid until help arrives",
            "Go looking for the driver responsible and scold him"
          ],
          "answer": 2,
          "explanation": "The victim needs urgent help. Calling for medical help and giving first aid is the responsible, empathetic response."
        },
        {
          "q": "In a meeting, a colleague presents your work as his own. What should you do?",
          "options": [
            "Speak to the colleague politely in private and, if needed, show the facts to the manager",
            "Shout at the colleague in front of everyone",
            "Stop sharing any work with the team in future",
            "Complain about the colleague to other employees"
          ],
          "answer": 0,
          "explanation": "A calm, direct conversation followed by proper channels settles the issue without aggression or gossip."
        },
        {
          "q": "After submitting a report to your boss, you notice an important error in it. What should you do?",
          "options": [
            "Hide the mistake and hope nobody notices",
            "Blame the junior who helped you prepare it",
            "Wait until the boss finds it and then explain",
            "Inform the boss promptly, admit the mistake and submit a corrected report"
          ],
          "answer": 3,
          "explanation": "Taking responsibility and fixing the error quickly shows honesty and accountability."
        },
        {
          "q": "A member of your team has not been contributing for some weeks because of personal problems. As a teammate, what is the best step?",
          "options": [
            "Report him to the manager for poor performance immediately",
            "Talk to him with empathy, offer support and, with the team leader's knowledge, share some of his work for a while",
            "Ignore it, since his personal life is not your concern",
            "Do his work silently every day without telling anyone"
          ],
          "answer": 1,
          "explanation": "This combines empathy with teamwork and proper communication. Ignoring him, reporting him or covering up silently are all poor choices."
        },
        {
          "q": "Your senior criticises your work harshly in a meeting. What is the most emotionally intelligent response?",
          "options": [
            "Stay calm, listen, and later discuss the points with the senior to improve your work",
            "Argue back immediately to defend yourself",
            "Resign, since you have been insulted",
            "Stop giving your opinions in meetings"
          ],
          "answer": 0,
          "explanation": "Self-regulation: stay calm, take the feedback, and improve. Arguing, quitting or withdrawing are not constructive."
        },
        {
          "q": "Which of the following is NOT one of the five components of emotional intelligence given by Daniel Goleman?",
          "options": [
            "Self-awareness",
            "Empathy",
            "Self-regulation",
            "Logical reasoning"
          ],
          "answer": 3,
          "explanation": "Goleman's five components are self-awareness, self-regulation, motivation, empathy and social skills. Logical reasoning is a cognitive (IQ) ability."
        },
        {
          "q": "Which psychologist popularised the term 'Emotional Intelligence' through his 1995 book of the same name?",
          "options": [
            "Howard Gardner",
            "Daniel Goleman",
            "Alfred Binet",
            "Sigmund Freud"
          ],
          "answer": 1,
          "explanation": "Daniel Goleman's 1995 book 'Emotional Intelligence' made the idea popular. Gardner is known for multiple intelligences and Binet for the first IQ test."
        },
        {
          "q": "At a crowded railway station, you find a small child crying who has lost his parents. What should you do?",
          "options": [
            "Take the child to your home",
            "Ignore him, since the parents will come back",
            "Comfort the child and take him to the station master or railway police so that an announcement can be made",
            "Ask the child to go and look for his parents himself"
          ],
          "answer": 2,
          "explanation": "Comfort the child and hand him to the proper authorities. This keeps him safe and gives the best chance of finding his parents."
        }
      ]
    },
    {
      "id": "indexing-matching",
      "name": "Indexing, Address & Data Matching",
      "notes": [
        {
          "heading": "Dictionary order / Indexing",
          "points": [
            "Compare words letter by letter from the left. The first letter that differs decides the order.",
            "If one word is the start of another, the shorter one comes first: Man → Manage → Manager.",
            "In directories and indexes, names are arranged by <b>surname first</b>, then first name (Gupta Amit comes before Gupta Anil).",
            "For 'which word comes third/last', look only at the letters where the words differ. There is no need to sort everything.",
            "Watch look-alike beginnings: Proc-, Prod-, Prof-, Prog-, Proj-, Prom- (c < d < f < g < j < m)."
          ]
        },
        {
          "heading": "Address & data matching technique",
          "points": [
            "Compare the given entry with each option <b>part by part</b>: name → house number → street/area → city → PIN.",
            "Common traps: swapped digits (462003 vs 462030), an extra or missing letter (Kumar vs Kumaar), a changed letter (Nagar vs Nager), a different separator (45/B vs 45-B).",
            "Check numbers and PIN codes first. They are changed most often, so you can rule out options quickly.",
            "An Indian PIN code has <b>6 digits</b>, and the first digit shows the postal region.",
            "For 'how many pairs are identical', mark each pair ✓ or ✗ once and count the ticks."
          ]
        },
        {
          "heading": "Date, city & code classification",
          "points": [
            "Date matching: check the day, month and year separately. Watch for 12-05 vs 05-12 and 2024 vs 2042.",
            "City names: look for spelling changes such as Kolkata/Kolkatta and Tiruchirappalli/Tiruchirapalli.",
            "Roll number or centre code questions give a format (e.g. Centre code – Year – Serial). Split each code into these parts before counting.",
            "Odd one out in codes: check where the letters and digits sit, the number of characters, the sum of the digits, and the order of the letters.",
            "Count with a tally mark against each code so you never count one twice."
          ]
        },
        {
          "heading": "Small & capital letters coding",
          "points": [
            "In case-sensitive questions, 'a' and 'A' are <b>different</b> symbols. Check the case at every position.",
            "Common patterns: alternating capital and small letters, a capital letter becoming the next letter in small case, vowels in capitals and consonants in small letters.",
            "Odd one out: check (i) the case pattern, (ii) the gaps between letters, (iii) where the digits are placed.",
            "Write the rule from the example under each letter, then apply it to the new word.",
            "Letter positions: A = 1 … Z = 26. Use EJOTY (5, 10, 15, 20, 25) to find positions fast."
          ]
        }
      ],
      "flashcards": [
        {
          "front": "Dictionary rule when one word is the start of another",
          "back": "The shorter word comes first: Man, Manage, Manager."
        },
        {
          "front": "Order of names in a telephone directory",
          "back": "By surname first, then by first name."
        },
        {
          "front": "Nation, Native, National, Nationality – dictionary order",
          "back": "Nation, National, Nationality, Native (o comes before v)."
        },
        {
          "front": "Which comes first: Brake or Bracket?",
          "back": "Bracket (B-R-A-C before B-R-A-K, since c comes before k)."
        },
        {
          "front": "Most common trap in address matching",
          "back": "Swapped digits in the PIN or house number (e.g. 462003 vs 462030)."
        },
        {
          "front": "How many digits in an Indian PIN code?",
          "back": "6 digits. The first digit shows the postal region."
        },
        {
          "front": "Date trap: 04-07-2024",
          "back": "4 July 2024 in DD-MM format, but 7 April 2024 in MM-DD format. Always check the format."
        },
        {
          "front": "Are 'aBc' and 'AbC' the same in a case-sensitive question?",
          "back": "No. Each letter's case must match exactly."
        },
        {
          "front": "First step in roll number or centre code questions",
          "back": "Split each code into the parts of the given format (e.g. Centre – Year – Serial)."
        },
        {
          "front": "Fastest way to compare two long codes",
          "back": "Compare in chunks of 3–4 characters, checking the numbers first."
        }
      ],
      "questions": [
        {
          "q": "Arrange the following words in the order in which they appear in an English dictionary.<br>1. Protect<br>2. Protest<br>3. Protein<br>4. Protector",
          "options": [
            "1, 4, 3, 2",
            "1, 3, 4, 2",
            "4, 1, 3, 2",
            "1, 4, 2, 3"
          ],
          "answer": 0,
          "explanation": "Protect comes before Protector (the shorter word first). Then compare the 6th letter: c (Protect) < i (Protein) < s (Protest). Order: 1, 4, 3, 2."
        },
        {
          "q": "Select the option that is exactly the same as the given address.<br>Ramesh Kumar, 45/B, Nehru Nagar, Bhopal – 462003",
          "options": [
            "Ramesh Kumar, 45/B, Nehru Nagar, Bhopal – 462030",
            "Ramesh Kumar, 54/B, Nehru Nagar, Bhopal – 462003",
            "Ramesh Kumaar, 45/B, Nehru Nagar, Bhopal – 462003",
            "Ramesh Kumar, 45/B, Nehru Nagar, Bhopal – 462003"
          ],
          "answer": 3,
          "explanation": "The first option has a wrong PIN (462030), the second a wrong house number (54/B), and the third a misspelt name (Kumaar)."
        },
        {
          "q": "How many of the following pairs are exactly identical?<br>(i) 7843-KLM : 7843-KLM<br>(ii) Q9R2T : Q9R2T<br>(iii) 56DF81 : 56FD81<br>(iv) Mumbai-400012 : Mumbai-400021<br>(v) AbCdE : AbcdE",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 1,
          "explanation": "Only (i) and (ii) match. (iii) has DF/FD, (iv) has 12/21, and (v) has C/c."
        },
        {
          "q": "Three of the following four letter-groups are alike in some way and one is different. Select the odd one.",
          "options": [
            "aBcD",
            "eFgH",
            "MnOp",
            "iJkL"
          ],
          "answer": 2,
          "explanation": "aBcD, eFgH and iJkL all start with a small letter and alternate small–capital. MnOp starts with a capital letter."
        },
        {
          "q": "In an examination, roll numbers are written as Centre code – Year – Serial number. The roll numbers are: DL-24-105, UP-23-218, DL-23-091, MH-24-332, UP-24-015. How many candidates of year 24 are NOT from centre DL?",
          "options": [
            "3",
            "1",
            "4",
            "2"
          ],
          "answer": 3,
          "explanation": "Year 24 codes: DL-24-105, MH-24-332, UP-24-015. Leaving out DL gives MH-24-332 and UP-24-015, which is 2."
        },
        {
          "q": "Select the entry that is exactly the same as:<br>Kolkata, 15-08-2024, Flight AI-719",
          "options": [
            "Kolkata, 15-08-2024, Flight AI-791",
            "Kolkatta, 15-08-2024, Flight AI-719",
            "Kolkata, 15-08-2024, Flight AI-719",
            "Kolkata, 15-08-2042, Flight AI-719"
          ],
          "answer": 2,
          "explanation": "The others have a changed flight number (791), a misspelt city (Kolkatta) or a wrong year (2042)."
        },
        {
          "q": "In a telephone directory, names are listed by surname first and then by first name. Which name will come THIRD?<br>Sharma Anil, Sharma Aman, Shah Rohit, Sharma Ajay",
          "options": [
            "Sharma Anil",
            "Sharma Aman",
            "Shah Rohit",
            "Sharma Ajay"
          ],
          "answer": 1,
          "explanation": "Shah comes before Sharma (h < r). Among the Sharmas: Ajay < Aman < Anil (j < m < n). Order: Shah Rohit, Sharma Ajay, Sharma Aman, Sharma Anil."
        },
        {
          "q": "In a certain code, each capital letter is written as the next letter of the alphabet in small case, and each small letter is written as the previous letter in capital. How will 'MoRe' be written in that code?",
          "options": [
            "nNsD",
            "nNsF",
            "nPsF",
            "LnQd"
          ],
          "answer": 0,
          "explanation": "M (capital) → n; o (small) → N; R (capital) → s; e (small) → D. Code: nNsD."
        }
      ]
    },
    {
      "id": "cubes-dice-figures",
      "name": "Cubes, Dice & Counting Figures",
      "notes": [
        {
          "heading": "Painted cube formulas (side n, cut into n³ unit cubes)",
          "points": [
            "Three faces painted = <b>8</b> (the corner cubes), for n ≥ 2.",
            "Two faces painted = <b>12(n − 2)</b> (edge cubes, not counting corners).",
            "One face painted = <b>6(n − 2)²</b> (cubes in the middle of each face).",
            "No face painted = <b>(n − 2)³</b> (the inner cubes).",
            "Check: 8 + 12(n − 2) + 6(n − 2)² + (n − 2)³ = n³. For n = 4: 8 + 24 + 24 + 8 = 64.",
            "Cuboid a × b × c (all ≥ 2): no face painted = (a − 2)(b − 2)(c − 2). With x, y and z straight cuts parallel to the three faces, you get (x + 1)(y + 1)(z + 1) pieces. The minimum number of cuts to make n³ equal cubes (without rearranging pieces) is 3(n − 1)."
          ]
        },
        {
          "heading": "Dice – finding opposite faces",
          "points": [
            "Standard die: opposite faces add up to <b>7</b> → 1–6, 2–5, 3–4. All six faces add up to 21.",
            "Two faces seen together in any position are adjacent, so they can never be opposite.",
            "If a face is seen with four different faces across the positions, the remaining sixth face is opposite to it.",
            "Two positions with a common face in the <b>same place</b>: the faces in the other matching places are opposite. E.g. (top 1, front 2, right 3) and (top 1, front 4, right 5) → 2 is opposite 4 and 3 is opposite 5.",
            "One common face in <b>different places</b>: in each position, list the faces clockwise starting from the common face. Faces at matching places in the two lists are opposite."
          ]
        },
        {
          "heading": "Counting figures – formulas",
          "points": [
            "Triangle with lines from one vertex dividing the opposite side into n parts: number of triangles = <b>n(n + 1)/2</b>.",
            "A square with both diagonals drawn contains <b>8</b> triangles.",
            "n × n grid: total squares = 1² + 2² + … + n² = n(n + 1)(2n + 1)/6. An 8 × 8 chessboard has <b>204</b> squares.",
            "m × n grid: rectangles (squares included) = [m(m + 1)/2] × [n(n + 1)/2]. A chessboard has 36 × 36 = <b>1296</b> rectangles.",
            "Method: label every point with a letter, then count systematically – single regions first, then groups of 2, 3 and more regions."
          ]
        },
        {
          "heading": "Cube nets & space orientation",
          "points": [
            "A cube has 6 faces, 12 edges and 8 vertices. There are <b>11</b> different nets of a cube.",
            "In a net, two faces with exactly one face between them in a straight row or column are opposite.",
            "Faces that share an edge in the net are adjacent on the cube and can never be opposite.",
            "In a net with a row of 4 squares, the 1st and 3rd are opposite, as are the 2nd and 4th. The two squares attached on either side of the row are opposite each other.",
            "However a die or cube is turned or rolled, its opposite pairs never change. Use this to eliminate options."
          ]
        }
      ],
      "flashcards": [
        {
          "front": "Painted cube (side n): cubes with 3 faces painted",
          "back": "8 (the corners)"
        },
        {
          "front": "Painted cube (side n): cubes with exactly 2 faces painted",
          "back": "12(n − 2)"
        },
        {
          "front": "Painted cube (side n): cubes with exactly 1 face painted",
          "back": "6(n − 2)²"
        },
        {
          "front": "Painted cube (side n): cubes with no face painted",
          "back": "(n − 2)³"
        },
        {
          "front": "Minimum cuts to divide a cube into 27 equal cubes",
          "back": "6, from 3(n − 1) with n = 3"
        },
        {
          "front": "Opposite faces of a standard die",
          "back": "1–6, 2–5, 3–4 (each pair adds up to 7)"
        },
        {
          "front": "Number of squares on a chessboard",
          "back": "204 (1² + 2² + … + 8²)"
        },
        {
          "front": "Number of rectangles on a chessboard",
          "back": "1296 (36 × 36)"
        },
        {
          "front": "Triangles in a triangle whose base is divided into n parts by lines from the top vertex",
          "back": "n(n + 1)/2"
        },
        {
          "front": "Triangles in a square with both diagonals",
          "back": "8 (4 small + 4 made of two small ones)"
        },
        {
          "front": "How many different nets does a cube have?",
          "back": "11"
        },
        {
          "front": "A face is seen with four other faces. Which face is opposite it?",
          "back": "The sixth face, the one never seen with it."
        }
      ],
      "questions": [
        {
          "q": "A cube of side 5 cm is painted on all its faces and then cut into cubes of side 1 cm. How many small cubes have exactly two faces painted?",
          "options": [
            "36",
            "27",
            "54",
            "48"
          ],
          "answer": 0,
          "explanation": "n = 5. Two faces painted = 12(n − 2) = 12 × 3 = 36."
        },
        {
          "q": "A cube of side 6 cm is painted on all its faces and then cut into cubes of side 1 cm. How many small cubes have no face painted?",
          "options": [
            "216",
            "125",
            "64",
            "96"
          ],
          "answer": 2,
          "explanation": "n = 6. No face painted = (n − 2)³ = 4³ = 64."
        },
        {
          "q": "A cube painted on all faces is cut into 64 identical smaller cubes. How many of the smaller cubes have exactly one face painted?",
          "options": [
            "8",
            "16",
            "32",
            "24"
          ],
          "answer": 3,
          "explanation": "64 = 4³, so n = 4. One face painted = 6(n − 2)² = 6 × 4 = 24."
        },
        {
          "q": "A die has the numbers 1 to 6 on its faces. In one position the visible faces are 1, 2 and 3. In another position the visible faces are 1, 4 and 5. Which number is opposite 1?",
          "options": [
            "4",
            "6",
            "2",
            "5"
          ],
          "answer": 1,
          "explanation": "1 is seen with 2, 3, 4 and 5, so none of these can be opposite it. The remaining number, 6, is opposite 1."
        },
        {
          "q": "A die has the letters A, B, C, D, E and F on its faces. Three positions show these visible faces: Position 1 – A, B, C; Position 2 – B, C, D; Position 3 – B, F, A. Which letter is opposite B?",
          "options": [
            "F",
            "C",
            "D",
            "E"
          ],
          "answer": 3,
          "explanation": "B is seen with A, C, D and F. The only letter never seen with B is E, so E is opposite B."
        },
        {
          "q": "A standard die (opposite faces add up to 7) lies on a table with 5 on top. What is the sum of the numbers on its four side faces?",
          "options": [
            "16",
            "14",
            "12",
            "15"
          ],
          "answer": 1,
          "explanation": "Bottom = 7 − 5 = 2. The four sides = 21 − 5 − 2 = 14."
        },
        {
          "q": "In triangle ABC, three straight lines are drawn from vertex A to different points on side BC, dividing BC into 4 parts. How many triangles are there in the figure?",
          "options": [
            "10",
            "8",
            "6",
            "12"
          ],
          "answer": 0,
          "explanation": "Base divided into n = 4 parts. Triangles = n(n + 1)/2 = 4 × 5/2 = 10."
        },
        {
          "q": "A large square is divided into a 4 × 4 grid of 16 equal small squares. How many squares in total are there in the figure?",
          "options": [
            "16",
            "25",
            "30",
            "20"
          ],
          "answer": 2,
          "explanation": "1×1: 16, 2×2: 9, 3×3: 4, 4×4: 1. Total = 16 + 9 + 4 + 1 = 30."
        }
      ]
    }
  ]
};
