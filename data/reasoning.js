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
        },
        {
          "q": "Select the option that is related to the third word in the same way as the second word is related to the first word.<br>Carpenter : Saw :: Tailor : ?",
          "options": [
            "Cloth",
            "Dress",
            "Needle",
            "Shop"
          ],
          "answer": 2,
          "explanation": "A carpenter uses a <b>saw</b> as his tool (worker : tool). A tailor's tool is the <b>needle</b>. Cloth is raw material, dress is the product and shop is the workplace."
        },
        {
          "q": "Select the option that is related to the third word in the same way as the second word is related to the first word.<br>Paper : Pulp :: Glass : ?",
          "options": [
            "Sand",
            "Mirror",
            "Window",
            "Bottle"
          ],
          "answer": 0,
          "explanation": "Paper is made from pulp (product : raw material). Glass is made mainly from <b>sand</b> (silica). Mirror, window and bottle are things made of glass."
        },
        {
          "q": "Select the option that is related to the third word in the same way as the second word is related to the first word.<br>Anemometer : Wind speed :: Hygrometer : ?",
          "options": [
            "Pressure",
            "Humidity",
            "Rainfall",
            "Altitude"
          ],
          "answer": 1,
          "explanation": "An anemometer measures wind speed (instrument : what it measures). A hygrometer measures <b>humidity</b>. Pressure – barometer; rainfall – rain gauge; altitude – altimeter."
        },
        {
          "q": "Select the option that is related to the third word in the same way as the second word is related to the first word.<br>Abundant : Scarce :: Transparent : ?",
          "options": [
            "Clear",
            "Translucent",
            "Visible",
            "Opaque"
          ],
          "answer": 3,
          "explanation": "Abundant and scarce are opposites (antonyms). The opposite of transparent is <b>opaque</b>. Translucent means partly transparent, so it is not the opposite."
        },
        {
          "q": "Select the number that is related to the third number in the same way as the second number is related to the first number.<br>25 : 36 :: 64 : ?",
          "options": [
            "72",
            "81",
            "100",
            "49"
          ],
          "answer": 1,
          "explanation": "25 = 5² and 36 = 6² (square of the next number). 64 = 8², so the answer is 9² = <b>81</b>."
        },
        {
          "q": "Select the set in which the numbers are related in the same way as the numbers of the following set.<br>(8, 5, 89)",
          "options": [
            "(6, 4, 52)",
            "(7, 3, 56)",
            "(9, 2, 83)",
            "(5, 6, 60)"
          ],
          "answer": 0,
          "explanation": "Rule: third number = (first)² + (second)². 8² + 5² = 64 + 25 = 89.<br>6² + 4² = 36 + 16 = <b>52</b> ✔. Others: 49+9 = 58, 81+4 = 85, 25+36 = 61."
        },
        {
          "q": "Select the option that is related to the third letter-cluster in the same way as the second letter-cluster is related to the first letter-cluster.<br>ACEG : BDFH :: PRTV : ?",
          "options": [
            "QTUW",
            "OQSU",
            "QSVW",
            "QSUW"
          ],
          "answer": 3,
          "explanation": "Each letter moves +1: A→B, C→D, E→F, G→H.<br>PRTV: P→Q, R→S, T→U, V→W = <b>QSUW</b>."
        },
        {
          "q": "Select the option that is related to the third letter-cluster in the same way as the second letter-cluster is related to the first letter-cluster.<br>GLOW : HJRS :: BARK : ?",
          "options": [
            "CZUG",
            "CYVG",
            "CYUG",
            "DYUG"
          ],
          "answer": 2,
          "explanation": "Shifts are +1, −2, +3, −4: G+1 = H, L−2 = J, O+3 = R, W−4 = S.<br>BARK: B+1 = C, A−2 = Y (wraps back past A), R+3 = U, K−4 = G = <b>CYUG</b>."
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
        },
        {
          "q": "Select the odd one out.",
          "options": [
            "Sarod",
            "Shehnai",
            "Veena",
            "Tanpura"
          ],
          "answer": 1,
          "explanation": "Sarod, veena and tanpura are <b>string</b> instruments. The shehnai is a wind (reed) instrument."
        },
        {
          "q": "Select the pair that is different from the others (country – capital).",
          "options": [
            "Japan – Tokyo",
            "France – Paris",
            "Egypt – Cairo",
            "Australia – Sydney"
          ],
          "answer": 3,
          "explanation": "Tokyo, Paris and Cairo are the capitals of Japan, France and Egypt. The capital of Australia is <b>Canberra</b>, not Sydney."
        },
        {
          "q": "Select the odd number.",
          "options": [
            "91",
            "119",
            "143",
            "133"
          ],
          "answer": 2,
          "explanation": "91 = 7 × 13, 119 = 7 × 17, 133 = 7 × 19 – all are multiples of 7. 143 = 11 × 13 is not divisible by 7."
        },
        {
          "q": "Select the number pair that is different from the others.",
          "options": [
            "11 – 120",
            "6 – 42",
            "8 – 72",
            "9 – 90"
          ],
          "answer": 0,
          "explanation": "Rule: second = first × (first + 1). 6×7 = 42, 8×9 = 72, 9×10 = 90. But 11 × 12 = 132, not 120. So <b>11 – 120</b> is odd."
        },
        {
          "q": "Select the letter-cluster that is different.",
          "options": [
            "AZBY",
            "GTHR",
            "CXDW",
            "EVFU"
          ],
          "answer": 1,
          "explanation": "Each cluster = a letter, its opposite, the next letter, its opposite: A-Z, B-Y; C-X, D-W; E-V, F-U. In GTHR, G-T are opposites but the opposite of H is <b>S</b>, not R."
        },
        {
          "q": "Select the letter-cluster that is different.",
          "options": [
            "KNQT",
            "DGJM",
            "PSVY",
            "HKNR"
          ],
          "answer": 3,
          "explanation": "KNQT, DGJM and PSVY follow +3, +3, +3. HKNR: H+3 = K, K+3 = N, but N+4 = R. So <b>HKNR</b> is odd."
        },
        {
          "q": "Select the odd one out.",
          "options": [
            "Brass",
            "Zinc",
            "Copper",
            "Aluminium"
          ],
          "answer": 0,
          "explanation": "Zinc, copper and aluminium are metallic <b>elements</b>. Brass is an alloy (of copper and zinc)."
        },
        {
          "q": "Select the odd number.",
          "options": [
            "6859",
            "2197",
            "3375",
            "4913"
          ],
          "answer": 2,
          "explanation": "6859 = 19³, 2197 = 13³, 4913 = 17³ – cubes of prime numbers. 3375 = 15³, and 15 is not prime."
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
        },
        {
          "q": "Find the next term: 7, 26, 63, 124, ?",
          "options": [
            "215",
            "216",
            "217",
            "225"
          ],
          "answer": 0,
          "explanation": "Terms are n³ − 1: 2³−1 = 7, 3³−1 = 26, 4³−1 = 63, 5³−1 = 124, 6³−1 = 216−1 = <b>215</b>."
        },
        {
          "q": "Find the next term: 2, 3, 5, 8, 13, 21, ?",
          "options": [
            "29",
            "34",
            "32",
            "42"
          ],
          "answer": 1,
          "explanation": "Each term = sum of the previous two: 2+3 = 5, 3+5 = 8, 5+8 = 13, 8+13 = 21, 13+21 = <b>34</b>."
        },
        {
          "q": "Find the next term: 6, 11, 21, 36, 56, ?",
          "options": [
            "76",
            "86",
            "81",
            "78"
          ],
          "answer": 2,
          "explanation": "Differences: 5, 10, 15, 20 (multiples of 5) → next difference 25. 56 + 25 = <b>81</b>."
        },
        {
          "q": "Find the next term: 32, 48, 72, 108, ?",
          "options": [
            "144",
            "154",
            "216",
            "162"
          ],
          "answer": 3,
          "explanation": "Each term = previous × 1.5 (i.e. × 3/2): 32 → 48 → 72 → 108 → 108 × 1.5 = <b>162</b>."
        },
        {
          "q": "Find the next term: 3, 20, 6, 17, 12, 14, 24, ?",
          "options": [
            "11",
            "48",
            "12",
            "10"
          ],
          "answer": 0,
          "explanation": "Two alternate series.<br>Odd positions: 3, 6, 12, 24 (× 2).<br>Even positions: 20, 17, 14 → next 14 − 3 = <b>11</b>."
        },
        {
          "q": "Find the missing term: 5, 11, 23, 47, ?, 191",
          "options": [
            "94",
            "95",
            "96",
            "93"
          ],
          "answer": 1,
          "explanation": "Each term = previous × 2 + 1: 5→11→23→47→47×2+1 = <b>95</b>, and 95×2+1 = 191 ✔."
        },
        {
          "q": "Find the wrong term in the series: 4, 9, 20, 42, 90, 185",
          "options": [
            "9",
            "20",
            "42",
            "90"
          ],
          "answer": 2,
          "explanation": "Pattern ×2+1, ×2+2, ×2+3, ×2+4, ×2+5: 4×2+1 = 9, 9×2+2 = 20, 20×2+3 = <b>43</b>, 43×2+4 = 90, 90×2+5 = 185. So 42 is wrong (should be 43)."
        },
        {
          "q": "Find the next term: 2, 12, 36, 80, 150, ?",
          "options": [
            "240",
            "256",
            "294",
            "252"
          ],
          "answer": 3,
          "explanation": "Terms are n³ + n² (= n²(n+1)): 1+1 = 2, 8+4 = 12, 27+9 = 36, 64+16 = 80, 125+25 = 150, 216+36 = <b>252</b>."
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
        },
        {
          "q": "Find the next term: AZ, CX, FU, JQ, ?",
          "options": [
            "OL",
            "OK",
            "NL",
            "PL"
          ],
          "answer": 0,
          "explanation": "First letters: A(1), C(3), F(6), J(10) – gaps +2, +3, +4 → +5 = 15 = O.<br>Second letters: Z(26), X(24), U(21), Q(17) – gaps −2, −3, −4 → −5 = 12 = L.<br>Answer <b>OL</b>."
        },
        {
          "q": "Find the next term: A, Z, C, X, E, V, ?",
          "options": [
            "T",
            "G",
            "F",
            "U"
          ],
          "answer": 1,
          "explanation": "Two alternate series. Odd positions: A, C, E → <b>G</b> (+2). Even positions: Z, X, V (−2). The 7th term belongs to the first series, so it is G."
        },
        {
          "q": "Find the next term: XB, AE, DH, GK, ?",
          "options": [
            "KN",
            "JM",
            "JN",
            "IN"
          ],
          "answer": 2,
          "explanation": "Both letters move +3 each time. First letters: X → A (wraps past Z) → D → G → <b>J</b>. Second letters: B → E → H → K → <b>N</b>. Answer <b>JN</b>."
        },
        {
          "q": "Find the next term: MAB, NCE, OEH, PGK, ?",
          "options": [
            "RIN",
            "QJN",
            "QIM",
            "QIN"
          ],
          "answer": 3,
          "explanation": "1st letters: M, N, O, P (+1) → Q.<br>2nd letters: A, C, E, G (+2) → I.<br>3rd letters: B, E, H, K (+3) → N.<br>Answer <b>QIN</b>."
        },
        {
          "q": "Find the next term: A2, C6, E12, G20, ?",
          "options": [
            "I30",
            "H30",
            "I28",
            "J30"
          ],
          "answer": 0,
          "explanation": "Letters: A, C, E, G (+2) → I.<br>Numbers: 2, 6, 12, 20 = 1×2, 2×3, 3×4, 4×5 → 5×6 = 30.<br>Answer <b>I30</b>."
        },
        {
          "q": "Select the letters that, when placed in the blanks in order, will complete the series.<br>a a _ b a _ b b _ a b _",
          "options": [
            "abab",
            "baab",
            "bbaa",
            "abba"
          ],
          "answer": 1,
          "explanation": "The repeating unit is 'aabb': aa<b>b</b>b | a<b>a</b>bb | <b>a</b>ab<b>b</b>. Blanks = b, a, a, b = <b>baab</b>."
        },
        {
          "q": "Study the arrangement:<br>K 7 # B 3 @ M 8 $ P 2 R % 5 T 9 & W<br>Which element is 6th to the right of the 10th element from the right end?",
          "options": [
            "5",
            "9",
            "%",
            "T"
          ],
          "answer": 3,
          "explanation": "There are 18 elements. 10th from the right = (18 − 10 + 1) = 9th from the left = $. 6th to the right of $ = 9 + 6 = 15th from the left = <b>T</b>."
        },
        {
          "q": "Find the next term: D, G, K, P, V, ?",
          "options": [
            "B",
            "D",
            "C",
            "A"
          ],
          "answer": 2,
          "explanation": "D(4) +3 → G(7) +4 → K(11) +5 → P(16) +6 → V(22) +7 → 29. Since 29 > 26, 29 − 26 = 3 = <b>C</b> (wrap-around)."
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
        },
        {
          "q": "In a certain code language, SHIFT is written as UJKHV. Which word is written as FKTGEV in that language?",
          "options": [
            "DIRECT",
            "DIRGCT",
            "DERECT",
            "DIRECY"
          ],
          "answer": 0,
          "explanation": "S→U, H→J, I→K, F→H, T→V: each letter +2. To decode, move each letter −2: F→D, K→I, T→R, G→E, E→C, V→T = <b>DIRECT</b>."
        },
        {
          "q": "In a certain code, ACE = 15 and BAD = 8. What is the code for FED?",
          "options": [
            "15",
            "60",
            "150",
            "120"
          ],
          "answer": 3,
          "explanation": "Code = product of letter positions: ACE = 1×3×5 = 15 ✔, BAD = 2×1×4 = 8 ✔.<br>FED = 6×5×4 = <b>120</b>."
        },
        {
          "q": "In a certain code, DOG = 78 and CAT = 72. What is the code for COW?",
          "options": [
            "120",
            "123",
            "41",
            "126"
          ],
          "answer": 1,
          "explanation": "Code = (sum of letter positions) × (number of letters). DOG = (4+15+7) × 3 = 26 × 3 = 78 ✔; CAT = 24 × 3 = 72 ✔.<br>COW = (3+15+23) × 3 = 41 × 3 = <b>123</b>."
        },
        {
          "q": "If 'white' is called 'blue', 'blue' is called 'red', 'red' is called 'yellow', 'yellow' is called 'green' and 'green' is called 'black', then what is the colour of human blood?",
          "options": [
            "Red",
            "Green",
            "Yellow",
            "Blue"
          ],
          "answer": 2,
          "explanation": "Human blood is red, and in this language 'red' is called <b>'yellow'</b>. Answer with the code name, not the real colour."
        },
        {
          "q": "In a certain code language:<br>'pit na so' means 'grow more trees'<br>'na ka lu' means 'trees are green'<br>'lu pit na zu' means 'green trees grow fast'<br>What is the code for 'more'?",
          "options": [
            "pit",
            "zu",
            "ka",
            "so"
          ],
          "answer": 3,
          "explanation": "Sentences 1 and 2 share only 'trees' and 'na' → trees = na. Sentences 1 and 3 share 'grow, trees' and 'pit, na' → grow = pit. The remaining word 'more' in sentence 1 = <b>so</b>."
        },
        {
          "q": "In a certain code language, TEACHER is written as ETCAEHR. How will MONSTER be written in that language?",
          "options": [
            "OMSNETR",
            "OMNSETR",
            "MOSNTER",
            "OMSNTER"
          ],
          "answer": 0,
          "explanation": "Letters are swapped in pairs: TE→ET, AC→CA, HE→EH, and the last letter R stays.<br>MONSTER: MO→OM, NS→SN, TE→ET, R stays = <b>OMSNETR</b>."
        },
        {
          "q": "If WORD is coded as XNSC, how will FAME be coded?",
          "options": [
            "GBND",
            "GZND",
            "EZND",
            "GZNF"
          ],
          "answer": 1,
          "explanation": "Shifts alternate +1, −1: W+1 = X, O−1 = N, R+1 = S, D−1 = C.<br>FAME: F+1 = G, A−1 = Z (wrap-around), M+1 = N, E−1 = D = <b>GZND</b>."
        },
        {
          "q": "In a certain code language, ROSE is written as 6821, CHAIR as 73456 and PREACH as 961473. How will SEARCH be written in that language?",
          "options": [
            "214763",
            "241673",
            "214673",
            "214637"
          ],
          "answer": 2,
          "explanation": "Each letter has a fixed digit: R = 6, O = 8, S = 2, E = 1 (ROSE); C = 7, H = 3, A = 4, I = 5 (CHAIR); P = 9 (PREACH).<br>SEARCH = S E A R C H = 2 1 4 6 7 3 = <b>214673</b>."
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
        },
        {
          "q": "Pointing to a photograph, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose photograph was it?",
          "options": [
            "His own",
            "His son's",
            "His father's",
            "His nephew's"
          ],
          "answer": 1,
          "explanation": "He has no siblings, so 'my father's son' is the man himself. So the person in the photograph has the speaker as his father → it is the speaker's <b>son</b>."
        },
        {
          "q": "A is B's brother. C is A's mother. D is C's father. E is B's son. How is D related to E?",
          "options": [
            "Grandfather",
            "Uncle",
            "Father",
            "Great-grandfather"
          ],
          "answer": 3,
          "explanation": "C is the mother of A and B. D is C's father, so D is B's maternal grandfather. E is B's son, so D is E's <b>great-grandfather</b>."
        },
        {
          "q": "A is the sister of B. B is the brother of C. C is the son of D. How is D related to A?",
          "options": [
            "Cannot be determined",
            "Father",
            "Mother",
            "Brother"
          ],
          "answer": 0,
          "explanation": "A, B and C are siblings and D is C's parent, so D is A's parent. D's gender is not given, so D may be the father or the mother – the exact relation <b>cannot be determined</b>."
        },
        {
          "q": "Introducing a boy, a woman said, 'He is the only son of my mother's only daughter-in-law.' How is the boy related to the woman?",
          "options": [
            "Son",
            "Brother",
            "Nephew",
            "Cousin"
          ],
          "answer": 2,
          "explanation": "The woman is her mother's daughter, not daughter-in-law. So her mother's daughter-in-law is the wife of the woman's brother. That lady's son is the woman's brother's son = her <b>nephew</b>."
        },
        {
          "q": "A + B means A is the father of B; A − B means A is the wife of B; A × B means A is the brother of B; A ÷ B means A is the daughter of B. If P × Q ÷ R − S, how is P related to S?",
          "options": [
            "Son",
            "Brother",
            "Father",
            "Nephew"
          ],
          "answer": 0,
          "explanation": "P × Q: P is Q's brother. Q ÷ R: Q is R's daughter. R − S: R is the wife of S, so S is Q's father. P is Q's brother (male), so P is S's <b>son</b>."
        },
        {
          "q": "In a family of six members A, B, C, D, E and F, there are two married couples. D is the grandmother of A and the mother of B. C is the wife of B and the mother of F. F is the granddaughter of E. How is E related to B?",
          "options": [
            "Grandfather",
            "Brother",
            "Uncle",
            "Father"
          ],
          "answer": 3,
          "explanation": "B–C is one couple; A and F are their children (the grandchildren). The only other couple possible is D–E. D is a woman (grandmother), so E is her husband. D is B's mother, so E is B's <b>father</b>."
        },
        {
          "q": "Pointing to a woman, Karan said, 'Her mother's only son is my father.' How is the woman related to Karan?",
          "options": [
            "Mother",
            "Sister",
            "Paternal aunt",
            "Maternal aunt"
          ],
          "answer": 2,
          "explanation": "Her mother's only son is her brother. That brother is Karan's father, so the woman is the sister of Karan's father = Karan's <b>paternal aunt</b> (bua)."
        },
        {
          "q": "Vinay is the son of the only brother of Anil's wife. How is Anil related to Vinay?",
          "options": [
            "Father",
            "Uncle",
            "Brother-in-law",
            "Grandfather"
          ],
          "answer": 1,
          "explanation": "Vinay's father is the brother of Anil's wife, so Anil's wife is Vinay's paternal aunt (bua). Her husband Anil is Vinay's <b>uncle</b> (phupha)."
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
        },
        {
          "q": "One evening before sunset, A and B were talking to each other face to face. A's shadow fell exactly to his left. Which direction was B facing?",
          "options": [
            "North",
            "South",
            "East",
            "West"
          ],
          "answer": 0,
          "explanation": "In the evening the sun is in the West, so shadows fall to the East. A's left points East → A faces South. B faces A, so B faces <b>North</b>."
        },
        {
          "q": "From his house, Arun walks 5 km South, turns right and walks 3 km, turns right again and walks 17 km, and then turns left and walks 2 km. How far and in which direction is he from his house?",
          "options": [
            "13 km North-East",
            "13 km North-West",
            "12 km North",
            "17 km South-West"
          ],
          "answer": 1,
          "explanation": "House = (0, 0). 5 km South → (0, −5). Right of South = West, 3 km → (−3, −5). Right of West = North, 17 km → (−3, 12). Left of North = West, 2 km → (−5, 12).<br>Distance = √(5² + 12²) = 13 km; x negative, y positive → <b>13 km North-West</b>."
        },
        {
          "q": "A man is facing North-East. He turns 135° anticlockwise and then 270° clockwise. Which direction is he facing now?",
          "options": [
            "North",
            "East",
            "South",
            "South-West"
          ],
          "answer": 2,
          "explanation": "North-East = 45° (measured clockwise from North). 45° − 135° = −90° = West. West + 270° clockwise = −90° + 270° = 180° = <b>South</b>. (Net turn = 135° clockwise from NE.)"
        },
        {
          "q": "P is 10 m North of Q. R is 10 m East of Q. S is 10 m North of R. In which direction is P with respect to R?",
          "options": [
            "South-East",
            "North-East",
            "West",
            "North-West"
          ],
          "answer": 3,
          "explanation": "Take Q = (0, 0). P = (0, 10), R = (10, 0). From R, P is 10 m West and 10 m North → <b>North-West</b> (S only confirms PQRS is a square)."
        },
        {
          "q": "A # B means A is 3 m North of B; A @ B means A is 4 m East of B; A $ B means A is 3 m South of B. If P # Q @ R $ S, what is the position of S with respect to P?",
          "options": [
            "4 m West",
            "4 m East",
            "5 m North-West",
            "3 m South"
          ],
          "answer": 0,
          "explanation": "R $ S: R is 3 m South of S → take R = (0, 0), S = (0, 3). Q @ R: Q = (4, 0). P # Q: P = (4, 3).<br>From P to S: 4 m West, 0 m North → S is <b>4 m West</b> of P."
        },
        {
          "q": "A car travels 12 km East, turns left and travels 20 km, then turns right and travels 9 km. What is the shortest distance between the car and its starting point?",
          "options": [
            "41 km",
            "29 km",
            "21 km",
            "25 km"
          ],
          "answer": 1,
          "explanation": "East 12 km, then North 20 km, then East 9 km. Net: 21 km East and 20 km North.<br>Distance = √(21² + 20²) = √(441 + 400) = √841 = <b>29 km</b>. (41 km is the total path.)"
        },
        {
          "q": "Early one morning, Ritu was walking towards the Sun. After some time she turned left, then turned left again, and then turned right. In which direction is she walking now?",
          "options": [
            "South",
            "West",
            "North",
            "East"
          ],
          "answer": 2,
          "explanation": "In the morning the Sun is in the East, so she was walking East. Left → North, left → West, right → <b>North</b>."
        },
        {
          "q": "Two friends start from the same point. A walks 6 km North and then 4 km East. B walks 2 km South and then 2 km West. What is the straight-line distance between A and B now?",
          "options": [
            "14 km",
            "12 km",
            "8 km",
            "10 km"
          ],
          "answer": 3,
          "explanation": "Start = (0, 0). A = (4, 6), B = (−2, −2). Horizontal gap = 4 − (−2) = 6 km, vertical gap = 6 − (−2) = 8 km.<br>Distance = √(6² + 8²) = √100 = <b>10 km</b>."
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
        },
        {
          "q": "In a row of girls, Meena is 18th from the left end and Rita is 22nd from the right end. Rita sits 4 places to the left of Meena. How many girls are there in the row?",
          "options": [
            "39",
            "36",
            "35",
            "43"
          ],
          "answer": 2,
          "explanation": "Rita is 4 places to the left of Meena → Rita is 18 − 4 = 14th from the left. She is also 22nd from the right → Total = 14 + 22 − 1 = <b>35</b>."
        },
        {
          "q": "In a row of 30 boys, Arjun is 20th from the left end and Kabir is 17th from the right end. How many boys are there between Arjun and Kabir?",
          "options": [
            "5",
            "6",
            "4",
            "3"
          ],
          "answer": 0,
          "explanation": "Kabir from the left = 30 − 17 + 1 = 14th. Boys between 14th and 20th = 20 − 14 − 1 = <b>5</b>.<br>(Overlap shortcut: 20 + 17 − 30 − 2 = 5.)"
        },
        {
          "q": "In a row, Asha is 12th from the left end and Bela is 18th from the right end. They interchange their positions, and Asha becomes 25th from the left end. What is Bela's new position from the right end?",
          "options": [
            "30th",
            "29th",
            "32nd",
            "31st"
          ],
          "answer": 3,
          "explanation": "Asha now sits in Bela's old seat: 25th from left and 18th from right → Total = 25 + 18 − 1 = 42.<br>Bela now sits in Asha's old seat (12th from left) → from the right = 42 − 12 + 1 = <b>31st</b>."
        },
        {
          "q": "In a queue, P is 7th from the front and Q is 5th from the end. There are exactly 3 persons between P and Q. What is the minimum possible number of persons in the queue?",
          "options": [
            "15",
            "7",
            "8",
            "11"
          ],
          "answer": 1,
          "explanation": "If P is ahead of Q: 7 + 3 + 5 = 15 persons. If Q is ahead of P: Q is 7 − 4 = 3rd from the front, and 5th from the end → total = 3 + 5 − 1 = 7 (P is last).<br>Minimum = <b>7</b>."
        },
        {
          "q": "In a row of 35 people facing North, Arun is 10th from the left end. Bhavna sits 5 places to the right of Arun. What is Bhavna's position from the right end?",
          "options": [
            "20th",
            "21st",
            "22nd",
            "19th"
          ],
          "answer": 1,
          "explanation": "Bhavna from the left = 10 + 5 = 15th. From the right = 35 − 15 + 1 = <b>21st</b>."
        },
        {
          "q": "Among the students who passed an exam, Ravi ranks 13th from the top and 28th from the bottom. 5 students failed and 3 were absent. How many students are there in the class?",
          "options": [
            "45",
            "40",
            "43",
            "48"
          ],
          "answer": 3,
          "explanation": "Passed students = 13 + 28 − 1 = 40. Total in class = 40 + 5 (failed) + 3 (absent) = <b>48</b>."
        },
        {
          "q": "In a row of 41 students facing North, Tanvi sits exactly in the middle. Kunal sits 6 places to the right of Tanvi. What is Kunal's position from the right end?",
          "options": [
            "15th",
            "14th",
            "16th",
            "27th"
          ],
          "answer": 0,
          "explanation": "Middle of 41 = 21st from each end. Moving 6 places to the right brings Kunal closer to the right end: 21 − 6 = <b>15th</b> from the right (27th from the left)."
        },
        {
          "q": "Five students scored different marks in a test. Mohit scored more than Nitin but less than Kavya. Ria scored less than Nitin. Sam scored more than Mohit but less than Kavya. Who scored the third highest marks?",
          "options": [
            "Sam",
            "Nitin",
            "Mohit",
            "Kavya"
          ],
          "answer": 2,
          "explanation": "Kavya > Mohit > Nitin > Ria, and Kavya > Sam > Mohit. Combined: Kavya > Sam > Mohit > Nitin > Ria. Third highest = <b>Mohit</b>."
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
        },
        {
          "q": "Six persons P, Q, R, S, T and U sit in a row facing North. Q sits at the extreme right end. R sits third to the left of Q. P sits to the immediate right of R. T sits to the immediate left of Q. U does not sit at any end. Who sits second to the left of P?",
          "options": [
            "U",
            "S",
            "T",
            "R"
          ],
          "answer": 0,
          "explanation": "Seats 1–6 from left: Q = 6, R = 3, P = 4, T = 5. U is not at an end, so U = 2 and S = 1. Row: S U R P T Q. Second to the left of P (seat 4) is seat 2 → <b>U</b>."
        },
        {
          "q": "Six friends A, B, C, D, E and F sit in a row facing South. D sits at one of the extreme ends. C sits second to the right of D. A sits to the immediate left of C. E sits to the immediate right of B. F is not an immediate neighbour of C. Who sits to the immediate right of C?",
          "options": [
            "A",
            "B",
            "E",
            "F"
          ],
          "answer": 1,
          "explanation": "Facing South, a person's right is towards the West. Seats 1–6 from West to East: D must be at the East end (6) so that C, second to his right, is at 4; A (to C's left = East) is at 5. F is not next to C, and E is just West of B → F = 1, E = 2, B = 3. Order: F E B C A D. Immediate right (West side) of C → <b>B</b>."
        },
        {
          "q": "Eight persons sit in two parallel rows of four each. P, Q, R and S sit in Row 1 facing South; A, B, C and D sit in Row 2 facing North, so each person faces one person of the other row. Q sits at an extreme end of Row 1 and faces B. R sits third to the right of Q. The person facing R sits second to the left of D. A sits to the immediate right of C. P does not face D. Who faces S?",
          "options": [
            "A",
            "C",
            "D",
            "B"
          ],
          "answer": 2,
          "explanation": "Row 1 faces South, so its 'right' is West; Row 2 faces North, so its 'right' is East. R is 3rd to the right of Q → Q at East end, R at West end; B faces Q. C faces R, and D is two places East of C; A is next to C. Row 2 (W→E): C A D B. P does not face D, so Row 1 (W→E): R P S Q. S faces <b>D</b>."
        },
        {
          "q": "Eight friends A, B, C, D, E, F, G and H sit around a circular table facing the centre. A sits opposite E. B sits second to the right of A. C sits to the immediate left of E. D sits third to the left of B. F sits to the immediate left of D. G is not an immediate neighbour of A. Who sits third to the right of C?",
          "options": [
            "D",
            "G",
            "H",
            "F"
          ],
          "answer": 3,
          "explanation": "Facing centre: left = clockwise. Seats 0–7 clockwise, A = 0, E = 4, B = 6, C = 5, D = 1, F = 2. G is not next to A, so G = 3 and H = 7. Order: A D F G E C B H. Third to the right (anticlockwise) of C (5) is seat 2 → <b>F</b>."
        },
        {
          "q": "Six persons K, L, M, N, O and P sit around a circular table facing the centre. K sits opposite N. M sits second to the left of K. P sits to the immediate left of N. O is not an immediate neighbour of M. Who sits to the immediate left of K?",
          "options": [
            "L",
            "O",
            "P",
            "M"
          ],
          "answer": 0,
          "explanation": "Facing centre: left = clockwise. Seats 0–5 clockwise: K = 0, N = 3, M = 2, P = 4. Seats 1 and 5 remain; O cannot be next to M (seats 1, 3), so O = 5 and L = 1. Immediate left of K (clockwise, seat 1) → <b>L</b>."
        },
        {
          "q": "Seven persons A, B, C, D, E, F and G sit in a row facing North. D sits third from the left end. G sits second to the right of D. Only one person sits between G and B. A sits to the immediate left of E. F sits somewhere to the right of G. Who sits exactly in the middle of the row?",
          "options": [
            "G",
            "C",
            "F",
            "E"
          ],
          "answer": 1,
          "explanation": "D = 3, G = 5, so B = 7 (seat 3 is taken). F is right of G → F = 6. A and E must be adjacent with A on the left → A = 1, E = 2. C takes seat 4. Row: A E D C G F B. Middle (4th) = <b>C</b>."
        },
        {
          "q": "Eight persons P, Q, R, S, T, U, V and W sit around a circular table facing <b>away from</b> the centre. P sits opposite T. R sits to the immediate right of P. V sits second to the left of R. Q sits third to the right of V. U sits to the immediate right of Q. S is an immediate neighbour of T. Who sits second to the right of T?",
          "options": [
            "S",
            "V",
            "W",
            "U"
          ],
          "answer": 2,
          "explanation": "Facing outward: right = clockwise. Seats 0–7 clockwise: P = 0, T = 4, R = 1, V = 7, Q = 2, U = 3. S next to T → S = 5, W = 6. Order: P R Q U T S W V. Second to the right of T (clockwise) = seat 6 → <b>W</b>."
        },
        {
          "q": "Eight persons A, B, C, D, E, F, G and H sit in a row facing North. E sits fourth from the right end. B sits third to the left of E. G sits to the immediate right of E. D sits second to the right of G. H sits at one of the ends, and only two persons sit between H and C. F is not an immediate neighbour of B. How many persons sit between A and F?",
          "options": [
            "2",
            "4",
            "5",
            "3"
          ],
          "answer": 3,
          "explanation": "Seats 1–8 from left: E = 5, B = 2, G = 6, D = 8. So H = 1 and C = 4. Seats 3 and 7 remain; F is not next to B → F = 7, A = 3. Row: H B A C E G F D. Between A (3) and F (7): C, E, G = <b>3</b>."
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
        },
        {
          "q": "Statements: No apple is a mango. Some mangoes are bananas.<br>Conclusions: I. Some bananas are not apples. II. Some apples are bananas.",
          "options": [
            "Only I follows",
            "Only II follows",
            "Both I and II follow",
            "Neither I nor II follows"
          ],
          "answer": 0,
          "explanation": "Some bananas are mangoes, and no mango is an apple → those bananas are not apples: 'Some bananas are not apples' (I follows). Apples may or may not touch bananas, so II is not definite. <b>Only I follows</b>."
        },
        {
          "q": "Statements: All books are copies. No copy is a pen.<br>Conclusions: I. No book is a pen. II. Some copies are books.",
          "options": [
            "Both I and II follow",
            "Only I follows",
            "Only II follows",
            "Neither I nor II follows"
          ],
          "answer": 0,
          "explanation": "All + No = No: 'No book is a pen' (I follows). Converting 'All books are copies' gives 'Some copies are books' (II follows). <b>Both follow</b>."
        },
        {
          "q": "Statements: Some cars are buses. No bus is a truck.<br>Conclusions: I. No car is a truck. II. All trucks are cars.",
          "options": [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows"
          ],
          "answer": 3,
          "explanation": "The only definite conclusion is 'Some cars are not trucks'. The cars that are not buses may or may not be trucks, so I is not definite; II has no basis. I and II are not a complementary pair, so either–or does not apply. <b>Neither follows</b>."
        },
        {
          "q": "Statements: Some stars are planets. Some planets are moons.<br>Conclusions: I. All moons are stars. II. Some moons are not stars.",
          "options": [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows"
          ],
          "answer": 2,
          "explanation": "Some + Some gives no definite star–moon relation, so neither I nor II follows alone. But I (All moons are stars) and II (Some moons are not stars) have the same subject and predicate and one of them must be true. <b>Either I or II follows</b>."
        },
        {
          "q": "Statements: All lions are tigers. Some tigers are cheetahs.<br>Conclusions: I. Some lions being cheetahs is a possibility. II. All tigers being lions is a possibility.",
          "options": [
            "Only I follows",
            "Only II follows",
            "Both I and II follow",
            "Neither I nor II follows"
          ],
          "answer": 2,
          "explanation": "Nothing prevents the lion circle from overlapping the cheetahs (I is possible). If the lion and tiger circles coincide, all statements still hold, so II is also possible. <b>Both follow</b>."
        },
        {
          "q": "Statements: All rings are bangles. Some bangles are chains. All chains are lockets.<br>Conclusions: I. Some rings are lockets. II. Some bangles are lockets.",
          "options": [
            "Only I follows",
            "Only II follows",
            "Both I and II follow",
            "Neither I nor II follows"
          ],
          "answer": 1,
          "explanation": "Some bangles are chains + All chains are lockets → Some bangles are lockets (II follows). The chains may lie outside the ring circle, so no definite ring–locket relation (I does not follow). <b>Only II follows</b>."
        },
        {
          "q": "Statements: All teachers are graduates. No graduate is illiterate.<br>Conclusions: I. Some teachers are illiterate. II. No teacher is illiterate.",
          "options": [
            "Only I follows",
            "Only II follows",
            "Both I and II follow",
            "Neither I nor II follows"
          ],
          "answer": 1,
          "explanation": "All + No = No: the teacher circle lies inside the graduate circle, which has nothing in common with illiterates → 'No teacher is illiterate' (II follows) and I is false. <b>Only II follows</b>."
        },
        {
          "q": "Statements: No shirt is a trouser. No trouser is a jacket.<br>Conclusions: I. No shirt is a jacket. II. Some shirts are jackets.",
          "options": [
            "Only I follows",
            "Only II follows",
            "Neither I nor II follows",
            "Either I or II follows"
          ],
          "answer": 3,
          "explanation": "No + No gives no definite shirt–jacket conclusion, so neither follows alone. I (No) and II (Some) have the same subject and predicate and form a complementary pair – one must be true. <b>Either I or II follows</b>."
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
        },
        {
          "q": "Which diagram best represents the relationship between: Cows, Horses, Goats?",
          "options": [
            "Three concentric circles (each inside the next)",
            "Three separate (non-overlapping) circles",
            "Three mutually intersecting circles",
            "Two separate circles, both inside a third larger circle"
          ],
          "answer": 1,
          "explanation": "No cow is a horse, no horse is a goat and no goat is a cow, and no class here contains the others → <b>three separate circles</b>."
        },
        {
          "q": "Which diagram best represents the relationship between: Human beings, Teachers, Graduates?",
          "options": [
            "Three concentric circles (each inside the next)",
            "One circle inside another, and a third circle separate from both",
            "Three mutually intersecting circles",
            "Two intersecting circles, both inside a third larger circle"
          ],
          "answer": 3,
          "explanation": "All teachers and all graduates are human beings. Some teachers are graduates and some are not (and vice versa) → Teachers and Graduates intersect, and both lie inside Human beings: <b>two intersecting circles inside a larger circle</b>."
        },
        {
          "q": "Which diagram best represents the relationship between: Rectangles, Squares, Rhombuses?",
          "options": [
            "Three concentric circles (each inside the next)",
            "Two separate circles, both inside a third larger circle",
            "Two intersecting circles, with the third circle lying inside their common region",
            "One circle inside another, and a third circle separate from both"
          ],
          "answer": 2,
          "explanation": "Every square is both a rectangle and a rhombus; some rectangles are not rhombuses and some rhombuses are not rectangles. So Rectangles and Rhombuses intersect, and Squares lie <b>inside their common region</b>."
        },
        {
          "q": "In a class of 50 students, 28 play cricket, 20 play football and 8 play both. How many students play exactly one of the two games?",
          "options": [
            "32",
            "40",
            "10",
            "28"
          ],
          "answer": 0,
          "explanation": "Only cricket = 28 − 8 = 20; only football = 20 − 8 = 12. Exactly one game = 20 + 12 = <b>32</b>. (40 play at least one; 10 play neither.)"
        },
        {
          "q": "In a survey of 100 people, 50 read newspaper A, 40 read B and 30 read C. 15 read both A and B, 12 read both B and C, 10 read both A and C, and 5 read all three. How many people read none of the three newspapers?",
          "options": [
            "17",
            "12",
            "22",
            "7"
          ],
          "answer": 1,
          "explanation": "n(A ∪ B ∪ C) = 50 + 40 + 30 − 15 − 12 − 10 + 5 = 88. None = 100 − 88 = <b>12</b>."
        },
        {
          "q": "In a Venn diagram, circle C = Cricket players, circle H = Hockey players, circle F = Football players. The regions contain: only C = 15, only H = 10, only F = 12, C and H only = 6, H and F only = 4, C and F only = 5, all three = 3. How many persons play at least two games?",
          "options": [
            "15",
            "21",
            "3",
            "18"
          ],
          "answer": 3,
          "explanation": "At least two = exactly two + all three = (6 + 4 + 5) + 3 = <b>18</b>. (Exactly two alone = 15.)"
        },
        {
          "q": "In a group of 60 students, 35 like music and 42 like dance. What is the minimum number of students who must like both music and dance?",
          "options": [
            "17",
            "35",
            "13",
            "25"
          ],
          "answer": 0,
          "explanation": "n(M ∩ D) = n(M) + n(D) − n(M ∪ D). The union can be at most 60, so both ≥ 35 + 42 − 60 = <b>17</b>."
        },
        {
          "q": "Which set of classes is best represented by two separate circles, both inside a third larger circle?",
          "options": [
            "Kolkata, West Bengal, India",
            "Musicians, Teachers, Painters",
            "Nitrogen, Oxygen, Gases",
            "Doctors, Men, Women"
          ],
          "answer": 2,
          "explanation": "Nitrogen and oxygen are different gases (separate circles), and both are gases (inside the larger circle) → <b>Nitrogen, Oxygen, Gases</b>. Kolkata ⊂ West Bengal ⊂ India is concentric; Musicians/Teachers/Painters all intersect; Doctors intersect both Men and Women."
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
        },
        {
          "q": "If 'A' means '+', 'B' means '−', 'C' means '×' and 'D' means '÷', find the value of: 18 C 4 D 6 A 9 B 5",
          "options": [
            "14",
            "18",
            "20",
            "16"
          ],
          "answer": 3,
          "explanation": "Rewrite: 18 × 4 ÷ 6 + 9 − 5. BODMAS: 18 × 4 = 72; 72 ÷ 6 = 12; 12 + 9 − 5 = <b>16</b>."
        },
        {
          "q": "If the signs '−' and '÷' are interchanged and the numbers 2 and 4 are interchanged, what is the value of: 36 − 4 + 5 × 2 ÷ 7?",
          "options": [
            "31",
            "29",
            "35",
            "27"
          ],
          "answer": 0,
          "explanation": "After both interchanges: 36 ÷ 2 + 5 × 4 − 7 = 18 + 20 − 7 = <b>31</b>."
        },
        {
          "q": "Select the correct combination of mathematical signs to replace the * signs (in order) and balance the equation:<br>15 * 3 * 4 * 8 * 2 = 26",
          "options": [
            "÷, +, ×, −",
            "÷, ×, +, −",
            "−, +, ×, ÷",
            "×, ÷, +, −"
          ],
          "answer": 1,
          "explanation": "÷, ×, +, −: 15 ÷ 3 × 4 + 8 − 2 = 5 × 4 + 6 = <b>26</b> ✔.<br>Others: 15 ÷ 3 + 4 × 8 − 2 = 35; 15 − 3 + 4 × 8 ÷ 2 = 28; 15 × 3 ÷ 4 + 8 − 2 = 17.25."
        },
        {
          "q": "Find the missing number.<br>Row 1: 2, 3, 35<br>Row 2: 3, 1, 28<br>Row 3: 4, 2, ?",
          "options": [
            "64",
            "70",
            "72",
            "80"
          ],
          "answer": 2,
          "explanation": "Third number = (first)³ + (second)³: 8 + 27 = 35 ✔; 27 + 1 = 28 ✔. Row 3: 64 + 8 = <b>72</b>."
        },
        {
          "q": "If a ★ b = a² − ab + b², find the value of (3 ★ 2) ★ 1.",
          "options": [
            "37",
            "49",
            "41",
            "43"
          ],
          "answer": 3,
          "explanation": "3 ★ 2 = 9 − 6 + 4 = 7. Then 7 ★ 1 = 49 − 7 + 1 = <b>43</b>."
        },
        {
          "q": "If 21 @ 3 = 10 and 36 @ 4 = 13, then 45 @ 5 = ?",
          "options": [
            "14",
            "12",
            "15",
            "9"
          ],
          "answer": 0,
          "explanation": "Rule: a @ b = (a ÷ b) + b. 21 ÷ 3 + 3 = 10 ✔; 36 ÷ 4 + 4 = 13 ✔. So 45 ÷ 5 + 5 = <b>14</b>."
        },
        {
          "q": "Which two numbers should be interchanged to make the given equation correct?<br>12 ÷ 4 × 6 + 3 − 2 = 13",
          "options": [
            "4 and 6",
            "6 and 3",
            "4 and 3",
            "3 and 2"
          ],
          "answer": 1,
          "explanation": "Swap 6 and 3: 12 ÷ 4 × 3 + 6 − 2 = 9 + 6 − 2 = <b>13</b> ✔.<br>Others: 4↔6 → 2 × 4 + 1 = 9; 4↔3 → 24 + 4 − 2 = 26; 3↔2 → 18 + 2 − 3 = 17."
        },
        {
          "q": "If '+' means '÷', '×' means '−', '÷' means '×' and '−' means '+', which of the following equations is correct?",
          "options": [
            "16 + 4 × 2 ÷ 3 − 5 = 11",
            "24 + 6 × 3 ÷ 2 − 7 = 4",
            "18 + 3 ÷ 2 × 4 − 6 = 14",
            "20 + 5 ÷ 3 × 6 − 4 = 12"
          ],
          "answer": 2,
          "explanation": "Convert option 3: 18 ÷ 3 × 2 − 4 + 6 = 12 − 4 + 6 = <b>14</b> ✔.<br>Others: 16 ÷ 4 − 2 × 3 + 5 = 3; 24 ÷ 6 − 3 × 2 + 7 = 5; 20 ÷ 5 × 3 − 6 + 4 = 10."
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
        },
        {
          "q": "What day of the week was 15 August 1947?",
          "options": [
            "Thursday",
            "Saturday",
            "Friday",
            "Sunday"
          ],
          "answer": 2,
          "explanation": "Odd days: 1600 years → 0; 1601–1900 → 1; 1901–1946: 46 years with 11 leap years → 46 + 11 = 57 → 1.<br>1 Jan–15 Aug 1947: 31 + 28 + 31 + 30 + 31 + 30 + 31 + 15 = 227 → 227 mod 7 = 3.<br>Total = 0 + 1 + 1 + 3 = 5 → <b>Friday</b>."
        },
        {
          "q": "If 1 January 2025 was a Wednesday, what day of the week was 1 March 2025?",
          "options": [
            "Friday",
            "Sunday",
            "Thursday",
            "Saturday"
          ],
          "answer": 3,
          "explanation": "Days from 1 Jan to 1 Mar = 31 (Jan) + 28 (Feb, 2025 not leap) = 59 → 59 mod 7 = 3 odd days. Wednesday + 3 = <b>Saturday</b>."
        },
        {
          "q": "If today is Monday, what day of the week will it be after 61 days?",
          "options": [
            "Saturday",
            "Sunday",
            "Friday",
            "Tuesday"
          ],
          "answer": 0,
          "explanation": "61 = 8 × 7 + 5 → 5 odd days. Monday + 5 = <b>Saturday</b>."
        },
        {
          "q": "How many times in a day are the hands of a clock at right angles?",
          "options": [
            "22",
            "44",
            "48",
            "24"
          ],
          "answer": 1,
          "explanation": "In 12 hours the minute hand gains 11 full rounds over the hour hand, and in each round the hands are at right angles twice → 11 × 2 = 22 times. In a day (24 hours) = 22 × 2 = <b>44</b>."
        },
        {
          "q": "At what time between 2 o'clock and 3 o'clock will the hands of a clock point in exactly opposite directions?",
          "options": [
            "40 minutes past 2",
            "43 3/11 minutes past 2",
            "43 7/11 minutes past 2",
            "45 5/11 minutes past 2"
          ],
          "answer": 2,
          "explanation": "At 2:00 the minute hand is 10 minute-spaces behind the hour hand. To be opposite it must get 30 spaces ahead, i.e. gain 40 spaces. Time = 40 × 60/55 = 480/11 = <b>43 7/11 minutes</b> past 2."
        },
        {
          "q": "A clock is set right at 8 a.m. It gains 10 minutes in every 24 hours. What is the true time when this clock shows 1 p.m. on the next day?",
          "options": [
            "12:40 p.m.",
            "12:50 p.m.",
            "12:45 p.m.",
            "12:48 p.m."
          ],
          "answer": 3,
          "explanation": "The clock shows 24 h 10 min (1450 min) in 1440 true minutes. From 8 a.m. to 1 p.m. next day it shows 29 h = 1740 min. True time passed = 1740 × 1440/1450 = 1728 min = 28 h 48 min → <b>12:48 p.m.</b>"
        },
        {
          "q": "If 1 January 2000 was a Saturday, what day of the week was 1 January 2001?",
          "options": [
            "Monday",
            "Sunday",
            "Tuesday",
            "Saturday"
          ],
          "answer": 0,
          "explanation": "2000 is a leap year (divisible by 400), so it has 366 days = 2 odd days. Saturday + 2 = <b>Monday</b>."
        },
        {
          "q": "In a certain month, the third Monday falls on the 20th. On which date does the first Saturday of that month fall?",
          "options": [
            "3rd",
            "4th",
            "5th",
            "2nd"
          ],
          "answer": 1,
          "explanation": "Mondays fall on 20, 13 and 6. Saturday is two days before Monday → 6 − 2 = <b>4th</b> (4 − 7 is not a valid date, so this is the first Saturday)."
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
        },
        {
          "q": "Arrange the words in the order in which they appear in an English dictionary:<br>1. Cheerful 2. Chemical 3. Charming 4. Cheap 5. Chess",
          "options": [
            "3, 1, 4, 2, 5",
            "3, 4, 1, 2, 5",
            "4, 3, 1, 2, 5",
            "3, 4, 2, 1, 5"
          ],
          "answer": 1,
          "explanation": "Third letter: Charming (a) comes before all 'Che-' words. Among Che-: Cheap (a), Cheerful (e), Chemical (m), Chess (s).<br>Order: Charming, Cheap, Cheerful, Chemical, Chess = <b>3, 4, 1, 2, 5</b>."
        },
        {
          "q": "Arrange the words in the order in which they appear in an English dictionary:<br>1. Car 2. Card 3. Care 4. Cargo 5. Carbon",
          "options": [
            "1, 2, 3, 4, 5",
            "5, 1, 2, 3, 4",
            "1, 5, 2, 3, 4",
            "1, 5, 3, 2, 4"
          ],
          "answer": 2,
          "explanation": "'Car' is a prefix of all the others, so it comes first. Then by the fourth letter: Carbon (b), Card (d), Care (e), Cargo (g).<br>Order = <b>1, 5, 2, 3, 4</b>."
        },
        {
          "q": "Which word will come third in the English dictionary order?<br>Slander, Slate, Slave, Slack, Slam",
          "options": [
            "Slate",
            "Slam",
            "Slave",
            "Slander"
          ],
          "answer": 3,
          "explanation": "All start with 'Sla'. Fourth letters: Slack (c), Slam (m), Slander (n), Slate (t), Slave (v). Third = <b>Slander</b>."
        },
        {
          "q": "Select the correct logical sequence:<br>1. Key 2. Door 3. Lock 4. Room 5. Switch on",
          "options": [
            "1, 3, 2, 4, 5",
            "1, 2, 3, 4, 5",
            "3, 1, 2, 4, 5",
            "1, 3, 2, 5, 4"
          ],
          "answer": 0,
          "explanation": "Take the key, open the lock, open the door, enter the room, then switch on the light: <b>1, 3, 2, 4, 5</b>."
        },
        {
          "q": "Select the correct logical sequence of the stages of human life:<br>1. Adult 2. Infant 3. Adolescent 4. Child 5. Old",
          "options": [
            "2, 3, 4, 1, 5",
            "2, 4, 3, 1, 5",
            "4, 2, 3, 1, 5",
            "2, 4, 1, 3, 5"
          ],
          "answer": 1,
          "explanation": "Infant → Child → Adolescent → Adult → Old = <b>2, 4, 3, 1, 5</b>."
        },
        {
          "q": "Arrange the following from the smallest unit to the largest:<br>1. Word 2. Letter 3. Sentence 4. Paragraph 5. Phrase",
          "options": [
            "2, 1, 3, 5, 4",
            "1, 2, 5, 3, 4",
            "2, 1, 5, 3, 4",
            "2, 5, 1, 3, 4"
          ],
          "answer": 2,
          "explanation": "Letters make a word, words make a phrase, phrases make a sentence and sentences make a paragraph: <b>2, 1, 5, 3, 4</b>."
        },
        {
          "q": "Which of the following words CAN be formed using the letters of the word DEPARTMENT?",
          "options": [
            "PARTNER",
            "TRUMPET",
            "TRAMPLE",
            "DAMPEN"
          ],
          "answer": 3,
          "explanation": "DEPARTMENT has D1, E2, P1, A1, R1, T2, M1, N1.<br>PARTNER needs two R's; TRUMPET needs U; TRAMPLE needs L. <b>DAMPEN</b> (D, A, M, P, E, N) can be formed."
        },
        {
          "q": "Which word will come fourth in the English dictionary order?<br>Grievance, Grind, Grieve, Grill, Grimace",
          "options": [
            "Grimace",
            "Grill",
            "Grind",
            "Grieve"
          ],
          "answer": 0,
          "explanation": "Grievance vs Grieve: 'Griev-a' comes before 'Griev-e'. Then Grill (l), Grimace (m), Grind (n).<br>Order: Grievance, Grieve, Grill, <b>Grimace</b>, Grind."
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
        },
        {
          "q": "A wall clock shows the time 7:10. What time will its mirror image (vertical mirror placed beside the clock) show?",
          "options": [
            "4:50",
            "5:50",
            "4:10",
            "5:10"
          ],
          "answer": 0,
          "explanation": "Mirror time = 11:60 − 7:10 = <b>4:50</b>."
        },
        {
          "q": "A clock shows the time 4:40. Using the standard rule, what time will its water image (reflection in water below the clock) show?",
          "options": [
            "7:20",
            "1:50",
            "2:50",
            "1:10"
          ],
          "answer": 1,
          "explanation": "Water image time = 18:30 − time = 18:30 − 4:40 = 13:50, i.e. <b>1:50</b>."
        },
        {
          "q": "A square sheet of paper is folded in half, then folded in half again, and then folded in half a third time. Two holes are punched through the folded paper. How many holes will there be when the paper is completely unfolded?",
          "options": [
            "8",
            "6",
            "16",
            "32"
          ],
          "answer": 2,
          "explanation": "Three folds give 2³ = 8 layers. Each punch goes through all 8 layers, so 2 punches give 2 × 8 = <b>16</b> holes."
        },
        {
          "q": "Which of the following words (in capital letters) will look exactly the same in its mirror image when a vertical mirror is placed on its right?",
          "options": [
            "NOON",
            "DEED",
            "SEES",
            "TOOT"
          ],
          "answer": 3,
          "explanation": "The mirror reverses the order of letters and flips each letter left–right. TOOT reads the same backwards and T, O are symmetric about a vertical line, so <b>TOOT</b> is unchanged. N, D, E and S are not vertically symmetric."
        },
        {
          "q": "A rectangle is divided into a grid of 2 rows and 3 columns of equal small squares. How many rectangles (including squares) are there in the figure?",
          "options": [
            "18",
            "12",
            "24",
            "36"
          ],
          "answer": 0,
          "explanation": "Choose 2 of the 3 horizontal lines and 2 of the 4 vertical lines: C(3, 2) × C(4, 2) = 3 × 6 = <b>18</b>."
        },
        {
          "q": "A rectangle is divided into a grid of 3 rows and 5 columns of equal small squares. How many squares of all sizes are there in the figure?",
          "options": [
            "15",
            "20",
            "23",
            "26"
          ],
          "answer": 3,
          "explanation": "1×1: 3 × 5 = 15; 2×2: 2 × 4 = 8; 3×3: 1 × 3 = 3. Total = 15 + 8 + 3 = <b>26</b>."
        },
        {
          "q": "Two positions of the same die (faces numbered 1 to 6) are described. Position 1: top 3, front 1, right 2. Position 2: top 3, front 5, right 6. Which number is opposite 2?",
          "options": [
            "1",
            "5",
            "6",
            "4"
          ],
          "answer": 2,
          "explanation": "The common face 3 is in the same place (top) in both positions, so faces in matching places are opposite: front 1 ↔ 5 and right 2 ↔ <b>6</b>."
        },
        {
          "q": "Which of the following groups contains only letters that look the same in BOTH a mirror image (vertical mirror) and a water image (horizontal mirror)?",
          "options": [
            "H I M X",
            "H I O X",
            "B O X I",
            "T O H I"
          ],
          "answer": 1,
          "explanation": "A letter must be symmetric about both a vertical and a horizontal line: H, I, O, X. M and T fail in water, B fails in the mirror. So <b>H I O X</b>."
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
        },
        {
          "q": "Statement: The number of candidates applying for government jobs has gone up by 40% this year, while the number of vacancies has remained the same as last year.<br>Conclusions:<br>I. The competition for government jobs has increased this year.<br>II. There are more applicants per vacancy this year than last year.",
          "options": [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Neither I nor II follows",
            "Both I and II follow"
          ],
          "answer": 3,
          "explanation": "More applicants for the same number of posts means more applicants per vacancy (II) and hence tougher competition (I). Both follow directly."
        },
        {
          "q": "Statement: Many people in a locality have fallen ill after drinking contaminated tap water.<br>Courses of action:<br>I. The health department should immediately provide medical aid to the affected people.<br>II. The water supply authority should inspect the pipelines and remove the source of contamination.",
          "options": [
            "Only I follows",
            "Both I and II follow",
            "Only II follows",
            "Neither I nor II follows"
          ],
          "answer": 1,
          "explanation": "I gives immediate relief and II solves the root cause. Both are practical and within the power of the authorities, so both follow."
        },
        {
          "q": "Statement: Should the use of mobile phones while driving be banned?<br>Arguments:<br>I. Yes, using a phone distracts the driver and is a major cause of road accidents.<br>II. No, people need to stay connected with others at all times.",
          "options": [
            "Only argument I is strong",
            "Only argument II is strong",
            "Both I and II are strong",
            "Neither I nor II is strong"
          ],
          "answer": 0,
          "explanation": "I is directly related to road safety and based on fact. II is an exaggeration ('at all times') and ignores safety, so it is weak."
        },
        {
          "q": "Statements:<br>I. All the schools in the district have declared a holiday today.<br>II. Many trains passing through the district have been cancelled today.",
          "options": [
            "Statement I is the cause and statement II is its effect",
            "Statement II is the cause and statement I is its effect",
            "Both statements are effects of some common cause",
            "Both statements are independent causes"
          ],
          "answer": 2,
          "explanation": "A school holiday does not cause train cancellations, nor the other way round. Both are likely results of a common cause such as very heavy rain or a cyclone."
        },
        {
          "q": "Statement: Every student who scored above 90% in the examination was given a scholarship. Meena did not get a scholarship.<br>Conclusions:<br>I. Meena did not score above 90% in the examination.<br>II. Meena failed the examination.",
          "options": [
            "Only conclusion II follows",
            "Only conclusion I follows",
            "Both I and II follow",
            "Neither I nor II follows"
          ],
          "answer": 1,
          "explanation": "If Meena had scored above 90% she would have got a scholarship, so I follows. She could still have passed with less than 90%, so II does not follow."
        },
        {
          "q": "Statement: Some of the new mobile phone models launched this year have better cameras than last year's models.<br>Conclusions:<br>I. All the new models launched this year have better cameras.<br>II. People will buy only the new models this year.",
          "options": [
            "Neither I nor II follows",
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Both I and II follow"
          ],
          "answer": 0,
          "explanation": "The statement says 'some', so 'all' in I does not follow. II is a guess about buyers' behaviour with the extreme word 'only'. Neither follows."
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
        },
        {
          "q": "You are a team leader. Two members of your team have been arguing for days over how a task should be done, and the work is getting delayed. What is the best step?",
          "options": [
            "Remove both members from the project at once",
            "Take the side of the senior member to end the matter quickly",
            "Meet both of them, listen to each side calmly and help them agree on a solution that serves the team's goal",
            "Ignore it, since adults should settle their own differences"
          ],
          "answer": 2,
          "explanation": "A good leader listens to both sides and focuses them on the common goal. Punishing, taking sides or ignoring the conflict does not solve it."
        },
        {
          "q": "You realise that you will not be able to finish an important assignment by the deadline given by your manager. What should you do?",
          "options": [
            "Inform the manager early, explain the progress, prioritise the key parts and ask for help or a short extension if needed",
            "Say nothing and submit incomplete work on the last day",
            "Call in sick on the day of the deadline",
            "Blame your colleagues for not helping you"
          ],
          "answer": 0,
          "explanation": "Telling people early, planning and asking for help is responsible. Hiding the problem, escaping or blaming others are poor responses."
        },
        {
          "q": "A relative forwards a sensational health message in your family group that you know is false. What is the most appropriate response?",
          "options": [
            "Forward it to other groups as well, just in case",
            "Leave the family group without saying anything",
            "Make fun of the relative in the group for believing it",
            "Politely tell the group that the message is false and share information from a reliable source"
          ],
          "answer": 3,
          "explanation": "Stopping misinformation politely with verified facts is responsible and respectful. Spreading it, mocking the relative or silently leaving does not help."
        },
        {
          "q": "Who gave the first formal model of emotional intelligence in 1990?",
          "options": [
            "Daniel Goleman and Richard Boyatzis",
            "Peter Salovey and John Mayer",
            "Howard Gardner and Robert Sternberg",
            "Alfred Binet and Théodore Simon"
          ],
          "answer": 1,
          "explanation": "Peter Salovey and John Mayer described emotional intelligence formally in 1990. Daniel Goleman later popularised it in his 1995 book."
        },
        {
          "q": "The ability to understand another person's feelings by seeing the situation from his or her point of view is called",
          "options": [
            "Sympathy",
            "Empathy",
            "Apathy",
            "Antipathy"
          ],
          "answer": 1,
          "explanation": "Empathy is understanding feelings from the other person's point of view. Sympathy is feeling pity, apathy is lack of feeling, and antipathy is dislike."
        },
        {
          "q": "You work at a public service counter. A citizen who has come several times for the same work starts speaking to you angrily. What should you do?",
          "options": [
            "Stay calm, listen to his problem patiently and help him complete the work or guide him to the right officer",
            "Shout back at him so that he learns to behave",
            "Ask the security guard to send him out at once",
            "Tell him to come back another day without looking at his problem"
          ],
          "answer": 0,
          "explanation": "Self-regulation and empathy: his anger comes from repeated visits. Calmly solving the problem is the constructive, public-service response."
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
        },
        {
          "q": "If the following words are arranged in the order in which they appear in an English dictionary, which word will come THIRD?<br>Magnet, Magnify, Magnitude, Magic, Magazine",
          "options": [
            "Magic",
            "Magnify",
            "Magnet",
            "Magazine"
          ],
          "answer": 2,
          "explanation": "Order: Magazine (maga), Magic (magi), Magnet (magne), Magnify (magnif), Magnitude (magnit). The third word is <b>Magnet</b>."
        },
        {
          "q": "Arrange the following words in the order in which they appear in an English dictionary.<br>1. Profile<br>2. Produce<br>3. Process<br>4. Program<br>5. Project",
          "options": [
            "3, 2, 1, 4, 5",
            "2, 3, 1, 4, 5",
            "3, 2, 4, 1, 5",
            "3, 1, 2, 4, 5"
          ],
          "answer": 0,
          "explanation": "Compare the 4th letter: c (Process) < d (Produce) < f (Profile) < g (Program) < j (Project). Order: 3, 2, 1, 4, 5."
        },
        {
          "q": "Select the option that is exactly the same as the given entry.<br>Anita Verma, HR-26-DK-8337, Sector 14, Gurugram – 122001",
          "options": [
            "Anita Verma, HR-26-DK-8373, Sector 14, Gurugram – 122001",
            "Anita Verma, HR-26-DK-8337, Secter 14, Gurugram – 122001",
            "Anita Verma, HR-26-DK-8337, Sector 14, Gurugram – 122010",
            "Anita Verma, HR-26-DK-8337, Sector 14, Gurugram – 122001"
          ],
          "answer": 3,
          "explanation": "The others have a changed vehicle number (8373), a misspelt 'Secter' or a wrong PIN (122010)."
        },
        {
          "q": "How many times does the number 5738 appear in the following list?<br>5738, 5783, 5738, 7538, 5738, 5378, 5738, 3758",
          "options": [
            "3",
            "4",
            "5",
            "2"
          ],
          "answer": 1,
          "explanation": "5738 appears at the 1st, 3rd, 5th and 7th places, i.e. <b>4</b> times. 5783, 7538, 5378 and 3758 are look-alikes with swapped digits."
        },
        {
          "q": "Three of the following four codes are alike in some way and one is different. Select the odd one.",
          "options": [
            "P3Q6",
            "R4S5",
            "V1W8",
            "T2U8"
          ],
          "answer": 3,
          "explanation": "In each code the letters are consecutive. The digits add up to 9 in P3Q6, R4S5 and V1W8, but to 10 in <b>T2U8</b> (which also has two even digits)."
        },
        {
          "q": "Dates are written in DD-MM-YYYY format. How many of the following dates fall in March 2023?<br>12-03-2023, 03-12-2023, 23-03-2032, 30-03-2023, 03-03-2023, 13-02-2023",
          "options": [
            "2",
            "4",
            "3",
            "5"
          ],
          "answer": 2,
          "explanation": "March 2023 needs MM = 03 and YYYY = 2023: 12-03-2023, 30-03-2023 and 03-03-2023, i.e. <b>3</b>. 03-12-2023 is in December and 23-03-2032 is in 2032."
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
        },
        {
          "q": "A cuboid of size 5 cm × 4 cm × 3 cm is painted on all its faces and then cut into cubes of side 1 cm. How many small cubes have exactly two faces painted?",
          "options": [
            "20",
            "24",
            "12",
            "6"
          ],
          "answer": 1,
          "explanation": "Each of the 12 edges gives (length − 2) cubes: 4 edges each of (5 − 2), (4 − 2) and (3 − 2). Total = 4 × (3 + 2 + 1) = <b>24</b>."
        },
        {
          "q": "A cube of side 5 cm has two opposite faces painted red and the other four faces painted green. It is cut into cubes of side 1 cm. How many small cubes have both red and green paint on them?",
          "options": [
            "16",
            "24",
            "32",
            "36"
          ],
          "answer": 2,
          "explanation": "On each red face (a 5 × 5 layer), only the border cubes touch a green face: 5² − 3² = 16. Two red faces → 2 × 16 = <b>32</b>."
        },
        {
          "q": "A rectangle is divided into a grid of 3 rows and 4 columns of equal small squares. How many rectangles (including squares) are there in the figure?",
          "options": [
            "60",
            "36",
            "72",
            "48"
          ],
          "answer": 0,
          "explanation": "Rectangles = C(4, 2) × C(5, 2) = 6 × 10 = <b>60</b> (choose 2 of the 4 horizontal lines and 2 of the 5 vertical lines)."
        },
        {
          "q": "A net of a cube has four squares in a row labelled P, Q, R and S from left to right. Square T is attached above Q and square U is attached below Q. When the net is folded into a cube, which face is opposite R?",
          "options": [
            "T",
            "S",
            "U",
            "P"
          ],
          "answer": 3,
          "explanation": "In a row of four, the 1st and 3rd faces are opposite and so are the 2nd and 4th. So <b>P</b> is opposite R (Q is opposite S, and T is opposite U)."
        },
        {
          "q": "A standard die (opposite faces add up to 7) is placed with 1 on top, 2 facing you and 3 on the right. It is rolled once to the right, tipping over its right edge. Which number is now on top?",
          "options": [
            "3",
            "4",
            "6",
            "5"
          ],
          "answer": 1,
          "explanation": "Rolling to the right sends the top face to the right side and brings the left face to the top. Left face = 7 − 3 = <b>4</b>."
        },
        {
          "q": "In a square, both diagonals are drawn, and also the two straight lines joining the midpoints of opposite sides. How many triangles are there in the figure?",
          "options": [
            "8",
            "12",
            "16",
            "20"
          ],
          "answer": 2,
          "explanation": "8 smallest triangles; 4 triangles made of 2 small ones, each with one side of the square as base and the centre as apex; 4 half-square triangles cut off by a diagonal. Total 8 + 4 + 4 = <b>16</b>."
        }
      ]
    }
  ]
};
