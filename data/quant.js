window.CGL_DATA = window.CGL_DATA || {};
window.CGL_DATA.quant = {
  "id": "quant",
  "name": "Quantitative Aptitude",
  "icon": "➗",
  "topics": [
    {
      "id": "number-system",
      "name": "Number System",
      "notes": [
        {
          "heading": "Divisibility Rules",
          "points": [
            "<b>2, 4, 8</b>: last 1, 2, 3 digits divisible by 2, 4, 8 respectively.",
            "<b>3, 9</b>: sum of digits divisible by 3 / 9.",
            "<b>11</b>: (sum of digits at odd places) − (sum at even places) = 0 or a multiple of 11.",
            "<b>7</b>: double the last digit and subtract from the rest; repeat till result is clearly divisible by 7.",
            "<b>Composite divisors</b>: check co-prime factors, e.g. 12 → 3 and 4; 72 → 8 and 9; 88 → 8 and 11."
          ]
        },
        {
          "heading": "Unit Digit & Remainders",
          "points": [
            "Cyclicity: 2, 3, 7, 8 → 4; 4, 9 → 2; 0, 1, 5, 6 → 1.",
            "For unit digit of a<sup>n</sup>: divide n by 4, use remainder (remainder 0 → take power 4).",
            "(a × b) mod n = [(a mod n) × (b mod n)] mod n.",
            "a<sup>n</sup> − b<sup>n</sup> is always divisible by (a − b); divisible by (a + b) when n is <b>even</b>.",
            "a<sup>n</sup> + b<sup>n</sup> is divisible by (a + b) when n is <b>odd</b>."
          ]
        },
        {
          "heading": "Factors, Factorials & Series",
          "points": [
            "If N = a<sup>p</sup> × b<sup>q</sup> × c<sup>r</sup> (prime factorisation), number of factors = (p+1)(q+1)(r+1).",
            "Sum of factors = [(a<sup>p+1</sup> − 1)/(a − 1)] × [(b<sup>q+1</sup> − 1)/(b − 1)] × ...",
            "Trailing zeros in n! = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ...",
            "Σn = n(n+1)/2; Σn² = n(n+1)(2n+1)/6; Σn³ = [n(n+1)/2]²; sum of first n odd numbers = n²; first n even numbers = n(n+1).",
            "Number of terms in AP = (last − first)/d + 1; sum = (n/2)(first + last).",
            "There are 25 primes between 1 and 100; 1 is neither prime nor composite; 2 is the only even prime."
          ]
        }
      ],
      "flashcards": [
        { "front": "Cyclicity of unit digits of 2, 3, 7, 8?", "back": "4 (pattern repeats every 4 powers)" },
        { "front": "Number of factors of N = a<sup>p</sup>b<sup>q</sup>c<sup>r</sup>?", "back": "(p+1)(q+1)(r+1)" },
        { "front": "Trailing zeros in n!", "back": "⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ..." },
        { "front": "Divisibility rule of 11?", "back": "Difference between sums of digits at odd and even places is 0 or a multiple of 11" },
        { "front": "Sum of squares of first n natural numbers?", "back": "n(n+1)(2n+1)/6" },
        { "front": "When is a<sup>n</sup> + b<sup>n</sup> divisible by (a + b)?", "back": "When n is odd" },
        { "front": "How many primes are there from 1 to 100?", "back": "25" }
      ],
      "questions": [
        {
          "q": "What is the unit digit of 7<sup>95</sup> × 3<sup>58</sup>?",
          "options": ["1", "3", "7", "9"],
          "answer": 2,
          "explanation": "Cyclicity of 7 and 3 is 4.<br>95 ÷ 4 leaves remainder 3 → unit digit of 7<sup>3</sup> = 343 → 3.<br>58 ÷ 4 leaves remainder 2 → unit digit of 3<sup>2</sup> = 9.<br>3 × 9 = 27 → unit digit <b>7</b>."
        },
        {
          "q": "If the six-digit number 537x46 is divisible by 11, what is the value of x?",
          "options": ["7", "4", "2", "9"],
          "answer": 0,
          "explanation": "From the right, odd places: 6, x, 3 → sum = 9 + x. Even places: 4, 7, 5 → sum = 16.<br>Difference = (9 + x) − 16 = x − 7 must be 0 or a multiple of 11 → x = <b>7</b>.<br>Check: 537746 = 11 × 48886."
        },
        {
          "q": "How many zeros are there at the end of 125! (125 factorial)?",
          "options": ["24", "31", "30", "32"],
          "answer": 1,
          "explanation": "Trailing zeros = ⌊125/5⌋ + ⌊125/25⌋ + ⌊125/125⌋ = 25 + 5 + 1 = <b>31</b>."
        },
        {
          "q": "How many factors (divisors) does 720 have?",
          "options": ["24", "28", "36", "30"],
          "answer": 3,
          "explanation": "720 = 2<sup>4</sup> × 3<sup>2</sup> × 5<sup>1</sup>.<br>Number of factors = (4+1)(2+1)(1+1) = 5 × 3 × 2 = <b>30</b>."
        },
        {
          "q": "What is the remainder when (17<sup>23</sup> + 23<sup>23</sup>) is divided by 40?",
          "options": ["17", "0", "23", "1"],
          "answer": 1,
          "explanation": "a<sup>n</sup> + b<sup>n</sup> is divisible by (a + b) when n is odd.<br>Here a + b = 17 + 23 = 40 and n = 23 is odd, so the expression is divisible by 40.<br>Remainder = <b>0</b>."
        },
        {
          "q": "What is the sum of all natural numbers between 100 and 200 that are divisible by 7?",
          "options": ["2030", "2204", "1998", "2107"],
          "answer": 3,
          "explanation": "First multiple of 7 after 100 = 105; last before 200 = 196.<br>Number of terms = (196 − 105)/7 + 1 = 13 + 1 = 14.<br>Sum = (14/2) × (105 + 196) = 7 × 301 = <b>2107</b>."
        },
        {
          "q": "What is the remainder when 2<sup>100</sup> is divided by 7?",
          "options": [
            "1",
            "2",
            "4",
            "3"
          ],
          "answer": 1,
          "explanation": "2<sup>3</sup> = 8 leaves remainder 1 when divided by 7. 2<sup>100</sup> = (2<sup>3</sup>)<sup>33</sup> × 2 → remainder 1 × 2 = 2."
        },
        {
          "q": "What is the largest four-digit number that is exactly divisible by 88?",
          "options": [
            "9944",
            "9988",
            "9900",
            "9856"
          ],
          "answer": 0,
          "explanation": "9999 ÷ 88 leaves remainder 55. Largest multiple = 9999 − 55 = 9944."
        },
        {
          "q": "What is the unit digit of the sum 1! + 2! + 3! + ... + 50!?",
          "options": [
            "0",
            "1",
            "3",
            "9"
          ],
          "answer": 2,
          "explanation": "From 5! onwards every factorial ends in 0. 1 + 2 + 6 + 24 = 33 → unit digit 3."
        },
        {
          "q": "What is the sum of all the factors (divisors) of 360?",
          "options": [
            "1080",
            "1200",
            "1260",
            "1170"
          ],
          "answer": 3,
          "explanation": "360 = 2<sup>3</sup> × 3<sup>2</sup> × 5. Sum = (1+2+4+8)(1+3+9)(1+5) = 15 × 13 × 6 = 1170."
        },
        {
          "q": "What is the least number that must be subtracted from 9999 to make it a perfect square?",
          "options": [
            "99",
            "198",
            "199",
            "189"
          ],
          "answer": 1,
          "explanation": "99² = 9801 is the largest perfect square below 9999. 9999 − 9801 = 198."
        },
        {
          "q": "A number when divided by 357 leaves a remainder 39. What will be the remainder when the same number is divided by 17?",
          "options": [
            "5",
            "3",
            "7",
            "39"
          ],
          "answer": 0,
          "explanation": "357 = 17 × 21, so the remainder is 39 ÷ 17 → 39 − 34 = 5."
        },
        {
          "q": "How many numbers from 1 to 500 (both inclusive) are divisible by neither 3 nor 5?",
          "options": [
            "233",
            "266",
            "300",
            "267"
          ],
          "answer": 3,
          "explanation": "Divisible by 3: 166, by 5: 100, by both (15): 33. Divisible by 3 or 5 = 166 + 100 − 33 = 233. Neither = 500 − 233 = 267."
        },
        {
          "q": "The number (3<sup>25</sup> + 3<sup>26</sup> + 3<sup>27</sup> + 3<sup>28</sup>) is divisible by:",
          "options": [
            "11",
            "16",
            "30",
            "25"
          ],
          "answer": 2,
          "explanation": "Sum = 3<sup>25</sup>(1 + 3 + 9 + 27) = 40 × 3<sup>25</sup> = 120 × 3<sup>24</sup>, which is divisible by 30."
        }
      ]
    },
    {
      "id": "hcf-lcm",
      "name": "HCF & LCM",
      "notes": [
        {
          "heading": "Core Relations",
          "points": [
            "For two numbers: HCF × LCM = product of the numbers.",
            "HCF always divides LCM. HCF of co-primes = 1; LCM of co-primes = their product.",
            "If HCF of two numbers is H, numbers can be taken as Ha and Hb where a, b are co-prime.",
            "HCF of fractions = HCF of numerators / LCM of denominators.",
            "LCM of fractions = LCM of numerators / HCF of denominators."
          ]
        },
        {
          "heading": "Remainder-Based Shortcuts",
          "points": [
            "Greatest number dividing x, y, z leaving the <b>same remainder</b> = HCF of (x−y), (y−z), (z−x).",
            "Greatest number dividing x and y leaving remainders r<sub>1</sub>, r<sub>2</sub> = HCF(x − r<sub>1</sub>, y − r<sub>2</sub>).",
            "Least number which when divided by a, b, c leaves the <b>same remainder r</b> = LCM(a, b, c) + r.",
            "Least number which when divided by a, b, c leaves remainders r<sub>1</sub>, r<sub>2</sub>, r<sub>3</sub> such that (a − r<sub>1</sub>) = (b − r<sub>2</sub>) = (c − r<sub>3</sub>) = k → required number = LCM(a, b, c) − k.",
            "Greatest n-digit number divisible by a, b, c = largest n-digit number − (its remainder when divided by LCM)."
          ]
        },
        {
          "heading": "Application Types",
          "points": [
            "Bells / lights / runners together again → <b>LCM</b> of intervals.",
            "Largest tile, largest container, maximum equal groups → <b>HCF</b>.",
            "Minimum number of square tiles for a floor = (area of floor) / (side of HCF tile)²."
          ]
        }
      ],
      "flashcards": [
        { "front": "Relation between HCF, LCM and two numbers?", "back": "HCF × LCM = product of the two numbers" },
        { "front": "HCF of fractions?", "back": "HCF of numerators / LCM of denominators" },
        { "front": "LCM of fractions?", "back": "LCM of numerators / HCF of denominators" },
        { "front": "Greatest number dividing x, y, z leaving the same remainder?", "back": "HCF of |x−y|, |y−z|, |z−x|" },
        { "front": "Least number which leaves remainder r when divided by a, b, c?", "back": "LCM(a, b, c) + r" },
        { "front": "Least number leaving remainders that are each k less than the divisors?", "back": "LCM of divisors − k" },
        { "front": "Bells ringing together again — HCF or LCM?", "back": "LCM of the time intervals" }
      ],
      "questions": [
        {
          "q": "The HCF and LCM of two numbers are 12 and 360 respectively. If one number is 72, the other number is:",
          "options": ["48", "90", "60", "120"],
          "answer": 2,
          "explanation": "Other number = (HCF × LCM) / given number = (12 × 360)/72 = 4320/72 = <b>60</b>.<br>Check: HCF(72, 60) = 12 and LCM(72, 60) = 360 ✓."
        },
        {
          "q": "What is the greatest number that divides 1252 and 1925 leaving remainders 9 and 4 respectively?",
          "options": ["107", "113", "119", "127"],
          "answer": 1,
          "explanation": "Required number = HCF(1252 − 9, 1925 − 4) = HCF(1243, 1921).<br>1921 − 1243 = 678; 1243 − 678 = 565; 678 − 565 = 113; 565 = 5 × 113.<br>HCF = <b>113</b> (1243 = 113 × 11, 1921 = 113 × 17)."
        },
        {
          "q": "What is the least number which, when divided by 12, 15, 20 and 54, leaves a remainder of 8 in each case?",
          "options": ["548", "540", "1088", "532"],
          "answer": 0,
          "explanation": "12 = 2²·3, 15 = 3·5, 20 = 2²·5, 54 = 2·3³.<br>LCM = 2² × 3³ × 5 = 540.<br>Required number = 540 + 8 = <b>548</b>."
        },
        {
          "q": "Three bells ring at intervals of 8, 12 and 18 minutes. If they ring together at 8:00 AM, when will they next ring together?",
          "options": ["9:36 AM", "9:24 AM", "10:12 AM", "9:12 AM"],
          "answer": 3,
          "explanation": "LCM(8, 12, 18): 8 = 2³, 12 = 2²·3, 18 = 2·3² → LCM = 2³ × 3² = 72 minutes = 1 h 12 min.<br>8:00 AM + 1 h 12 min = <b>9:12 AM</b>."
        },
        {
          "q": "What is the LCM of 2/3, 4/9 and 5/6?",
          "options": ["10/3", "20/9", "20/3", "40/3"],
          "answer": 2,
          "explanation": "LCM of fractions = LCM of numerators / HCF of denominators.<br>LCM(2, 4, 5) = 20; HCF(3, 9, 6) = 3.<br>LCM = <b>20/3</b>."
        },
        {
          "q": "What is the least number which, when divided by 16, 20 and 24, leaves remainders 12, 16 and 20 respectively?",
          "options": ["244", "232", "476", "236"],
          "answer": 3,
          "explanation": "Divisor − remainder: 16 − 12 = 20 − 16 = 24 − 20 = 4 (constant).<br>LCM(16, 20, 24) = 2⁴ × 3 × 5 = 240.<br>Required number = 240 − 4 = <b>236</b>.<br>Check: 236 = 16×14 + 12 = 20×11 + 16 = 24×9 + 20 ✓."
        },
        {
          "q": "The product of two numbers is 4107 and their HCF is 37. What is the greater number?",
          "options": [
            "111",
            "101",
            "107",
            "117"
          ],
          "answer": 0,
          "explanation": "Numbers = 37a and 37b with a, b co-prime; 37² × ab = 4107 → ab = 3 → a = 1, b = 3. Greater number = 111."
        },
        {
          "q": "What is the HCF of 2/3, 8/9 and 16/81?",
          "options": [
            "2/3",
            "2/81",
            "16/81",
            "8/27"
          ],
          "answer": 1,
          "explanation": "HCF of fractions = HCF of numerators / LCM of denominators = HCF(2, 8, 16) / LCM(3, 9, 81) = 2/81."
        },
        {
          "q": "What is the greatest number that divides 43, 91 and 183 leaving the same remainder in each case?",
          "options": [
            "7",
            "8",
            "4",
            "9"
          ],
          "answer": 2,
          "explanation": "Required number = HCF(91 − 43, 183 − 91, 183 − 43) = HCF(48, 92, 140) = 4."
        },
        {
          "q": "A room is 15.17 m long and 9.02 m broad. What is the least number of square tiles of equal size required to cover the floor completely?",
          "options": [
            "714",
            "841",
            "902",
            "814"
          ],
          "answer": 3,
          "explanation": "Largest tile side = HCF(1517, 902) cm = 41 cm. Tiles = (1517 × 902)/(41 × 41) = 37 × 22 = 814."
        },
        {
          "q": "Two numbers are in the ratio 2 : 3 and their LCM is 48. What is the sum of the numbers?",
          "options": [
            "40",
            "30",
            "36",
            "45"
          ],
          "answer": 0,
          "explanation": "Numbers 2k and 3k have LCM 6k = 48 → k = 8. Numbers are 16 and 24; sum = 40."
        },
        {
          "q": "What is the smallest four-digit number that is exactly divisible by 12, 15 and 18?",
          "options": [
            "1020",
            "1080",
            "1180",
            "1260"
          ],
          "answer": 1,
          "explanation": "LCM(12, 15, 18) = 180. Smallest multiple of 180 with four digits = 180 × 6 = 1080."
        },
        {
          "q": "The sum of two numbers is 528 and their HCF is 33. How many such pairs of numbers are possible?",
          "options": [
            "2",
            "3",
            "5",
            "4"
          ],
          "answer": 3,
          "explanation": "Numbers = 33a + 33b = 528 → a + b = 16 with a, b co-prime: (1,15), (3,13), (5,11), (7,9) → 4 pairs."
        },
        {
          "q": "What is the least number which leaves a remainder 3 when divided by 5, 6, 7 and 8, but is exactly divisible by 9?",
          "options": [
            "843",
            "1677",
            "1683",
            "2523"
          ],
          "answer": 2,
          "explanation": "Number = 840k + 3 (LCM = 840). 840k + 3 divisible by 9 → 3k + 3 ≡ 0 (mod 9) → k = 2. Number = 1683."
        }
      ]
    },
    {
      "id": "simplification-surds",
      "name": "Simplification & Surds",
      "notes": [
        {
          "heading": "Order of Operations",
          "points": [
            "<b>VBODMAS</b>: Vinculum (bar) → Brackets ( ), { }, [ ] → Of → Division → Multiplication → Addition → Subtraction.",
            "'of' is done before ÷ and ×; ÷ and × of equal rank are evaluated left to right.",
            "Recurring decimals: 0.aaa... = a/9; 0.ababab... = ab/99.",
            "Mixed recurring: 0.abbb... = (ab − a)/90; 0.abcbc... = (abc − a)/990."
          ]
        },
        {
          "heading": "Surds & Indices",
          "points": [
            "a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>; a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>; (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>; a<sup>0</sup> = 1; a<sup>−n</sup> = 1/a<sup>n</sup>.",
            "√a × √b = √(ab); rationalise using (√a + √b)(√a − √b) = a − b.",
            "1/(√(n+1) + √n) = √(n+1) − √n; 1/(√(n+1) − √n) = √(n+1) + √n.",
            "√(a + 2√b) = √x + √y, where x + y = a and xy = b (x > y). Similarly √(a − 2√b) = √x − √y.",
            "To compare surds of different orders, raise all to the power = LCM of root indices."
          ]
        },
        {
          "heading": "Infinite Radicals",
          "points": [
            "√(x + √(x + √(x + ...))) = [1 + √(1 + 4x)]/2. If x = n(n+1), value = n + 1.",
            "√(x − √(x − √(x − ...))) = [−1 + √(1 + 4x)]/2. If x = n(n+1), value = n.",
            "√(x√(x√(x...))) infinitely = x; with n roots = x<sup>(1 − 1/2<sup>n</sup>)</sup>."
          ]
        }
      ],
      "flashcards": [
        { "front": "Expand VBODMAS", "back": "Vinculum, Brackets, Of, Division, Multiplication, Addition, Subtraction" },
        { "front": "√(x + √(x + ...)) when x = n(n+1)?", "back": "n + 1 (e.g. x = 12 → 4)" },
        { "front": "√(x − √(x − ...)) when x = n(n+1)?", "back": "n (e.g. x = 20 → 4)" },
        { "front": "0.ababab... as a fraction?", "back": "ab/99" },
        { "front": "0.abbb... (b recurring) as a fraction?", "back": "(ab − a)/90, e.g. 0.1666... = 15/90 = 1/6" },
        { "front": "1/(√(n+1) − √n) = ?", "back": "√(n+1) + √n" },
        { "front": "How to find √(a + 2√b)?", "back": "Find x, y with x + y = a and xy = b; answer √x + √y" }
      ],
      "questions": [
        {
          "q": "Find the value of: 1/(√9 − √8) − 1/(√8 − √7) + 1/(√7 − √6) − 1/(√6 − √5) + 1/(√5 − √4)",
          "options": ["0", "5", "1", "2√2"],
          "answer": 1,
          "explanation": "1/(√(n+1) − √n) = √(n+1) + √n.<br>Expression = (3 + √8) − (√8 + √7) + (√7 + √6) − (√6 + √5) + (√5 + 2).<br>All surds cancel → 3 + 2 = <b>5</b>."
        },
        {
          "q": "What is the value of √(12 + √(12 + √(12 + ... ∞)))?",
          "options": ["3", "6", "2√3", "4"],
          "answer": 3,
          "explanation": "Let x = the expression. Then x² = 12 + x → x² − x − 12 = 0 → (x − 4)(x + 3) = 0.<br>x is positive, so x = <b>4</b>. (Shortcut: 12 = 3 × 4 → answer 4.)"
        },
        {
          "q": "0.222... + 0.343434... is equal to:",
          "options": ["56/99", "65/99", "28/45", "5/9"],
          "answer": 0,
          "explanation": "0.222... = 2/9 = 22/99; 0.343434... = 34/99.<br>Sum = (22 + 34)/99 = <b>56/99</b>."
        },
        {
          "q": "Simplify: √(11 + 2√30) − √(11 − 2√30)",
          "options": ["2√6", "√30", "2√5", "2"],
          "answer": 2,
          "explanation": "Find x + y = 11, xy = 30 → x = 6, y = 5.<br>√(11 + 2√30) = √6 + √5; √(11 − 2√30) = √6 − √5.<br>Difference = (√6 + √5) − (√6 − √5) = <b>2√5</b>."
        },
        {
          "q": "Which of the following is the largest: √2, ∛3, ⁴√5, ⁶√10?",
          "options": ["⁴√5", "√2", "∛3", "⁶√10"],
          "answer": 0,
          "explanation": "LCM of root indices 2, 3, 4, 6 = 12. Raise each to the 12th power:<br>(√2)<sup>12</sup> = 2<sup>6</sup> = 64; (∛3)<sup>12</sup> = 3<sup>4</sup> = 81; (⁴√5)<sup>12</sup> = 5<sup>3</sup> = 125; (⁶√10)<sup>12</sup> = 10<sup>2</sup> = 100.<br>Largest is <b>⁴√5</b>."
        },
        {
          "q": "Simplify: 45 ÷ 5 × 3 − 4 of 2 + 18 ÷ 3²",
          "options": ["5", "23", "17", "21"],
          "answer": 3,
          "explanation": "Order: 'of' → 4 of 2 = 8; power → 3² = 9.<br>Then ÷ and × left to right: 45 ÷ 5 = 9, 9 × 3 = 27; 18 ÷ 9 = 2.<br>27 − 8 + 2 = <b>21</b>."
        },
        {
          "q": "If x = 3 + 2√2, what is the value of x² + 1/x²?",
          "options": [
            "34",
            "36",
            "32",
            "38"
          ],
          "answer": 0,
          "explanation": "1/x = 3 − 2√2, so x + 1/x = 6. x² + 1/x² = 6² − 2 = 34."
        },
        {
          "q": "Express 0.4777... (0.4 followed by recurring 7) as a fraction.",
          "options": [
            "47/99",
            "43/90",
            "47/90",
            "43/99"
          ],
          "answer": 1,
          "explanation": "0.47̄ = (47 − 4)/90 = 43/90."
        },
        {
          "q": "Simplify: (√3 + √2)/(√3 − √2)",
          "options": [
            "5 − 2√6",
            "1 + 2√6",
            "5 + √6",
            "5 + 2√6"
          ],
          "answer": 3,
          "explanation": "Multiply by (√3 + √2)/(√3 + √2): (√3 + √2)²/(3 − 2) = 3 + 2 + 2√6 = 5 + 2√6."
        },
        {
          "q": "If 2<sup>x + 3</sup> = 32<sup>x − 1</sup>, then what is the value of x?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 1,
          "explanation": "32 = 2<sup>5</sup>, so x + 3 = 5(x − 1) → 4x = 8 → x = 2."
        },
        {
          "q": "What is the value of 64<sup>−2/3</sup> × (1/4)<sup>−3</sup>?",
          "options": [
            "4",
            "1/4",
            "16",
            "8"
          ],
          "answer": 0,
          "explanation": "64<sup>−2/3</sup> = 1/(4²) = 1/16 and (1/4)<sup>−3</sup> = 4³ = 64. Product = 64/16 = 4."
        },
        {
          "q": "What is the value of √(5√(5√5))?",
          "options": [
            "5<sup>3/4</sup>",
            "5<sup>15/16</sup>",
            "5<sup>7/8</sup>",
            "5"
          ],
          "answer": 2,
          "explanation": "With 3 nested roots the power is 1 − 1/2³ = 7/8, so the value is 5<sup>7/8</sup>."
        },
        {
          "q": "Simplify: 18 − [5 − {6 + 2(7 − 3)}]",
          "options": [
            "9",
            "13",
            "27",
            "23"
          ],
          "answer": 2,
          "explanation": "7 − 3 = 4; 6 + 2 × 4 = 14; 5 − 14 = −9; 18 − (−9) = 27."
        },
        {
          "q": "Which of the following is the smallest?",
          "options": [
            "√7 − √5",
            "√5 − √3",
            "√9 − √7",
            "√11 − √9"
          ],
          "answer": 3,
          "explanation": "√(n+2) − √n = 2/(√(n+2) + √n), which decreases as n grows. So √11 − √9 is the smallest."
        }
      ]
    },
    {
      "id": "percentage",
      "name": "Percentage",
      "notes": [
        {
          "heading": "Fraction–Percent Table",
          "points": [
            "1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16.67%, 1/7 = 14 2/7% (≈ 14.29%), 1/8 = 12.5%.",
            "1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%, 1/15 = 6.67%, 1/16 = 6.25%, 1/20 = 5%, 1/25 = 4%.",
            "x% of y = y% of x (e.g. 16% of 25 = 25% of 16 = 4)."
          ]
        },
        {
          "heading": "Change Formulas",
          "points": [
            "Percentage change = (change / original) × 100.",
            "Successive changes a% and b%: net = a + b + ab/100 (use negative sign for decrease).",
            "If A is r% more than B, B is [r/(100 + r)] × 100% less than A.",
            "If A is r% less than B, B is [r/(100 − r)] × 100% more than A.",
            "Price rises by r% → consumption must fall by [r/(100 + r)] × 100% to keep expenditure same; price falls r% → consumption can rise [r/(100 − r)] × 100%.",
            "Population after n years = P(1 + r/100)<sup>n</sup>; depreciation: V = P(1 − r/100)<sup>n</sup>."
          ]
        },
        {
          "heading": "Exams & Elections",
          "points": [
            "If a student gets a% and fails by x marks, another gets b% and passes by y marks: (b − a)% of max = x + y.",
            "Election with two candidates: winning margin = (winner% − loser%) of valid votes.",
            "Always check whether percentages are on <b>total</b> votes or <b>valid</b> votes."
          ]
        }
      ],
      "flashcards": [
        { "front": "1/7, 1/9, 1/11 as percentages?", "back": "14 2/7% (≈ 14.29%), 11.11%, 9.09%" },
        { "front": "Net effect of successive changes a% and b%?", "back": "a + b + ab/100 (%)" },
        { "front": "A is r% more than B. B is how much less than A?", "back": "r/(100 + r) × 100 %" },
        { "front": "Price increases 25%. Reduce consumption by?", "back": "25/125 × 100 = 20%" },
        { "front": "Population after n years at r% growth?", "back": "P(1 + r/100)<sup>n</sup>" },
        { "front": "Equal increase and decrease of x% gives?", "back": "A net decrease of x²/100 %" }
      ],
      "questions": [
        {
          "q": "The price of sugar increases by 25%. By what percentage must a family reduce its consumption so that its expenditure on sugar remains the same?",
          "options": ["25%", "20%", "22.5%", "15%"],
          "answer": 1,
          "explanation": "Required reduction = [r/(100 + r)] × 100 = (25/125) × 100 = <b>20%</b>."
        },
        {
          "q": "A salary is first increased by 20%, then increased by 10% and finally decreased by 25%. What is the net change in the salary?",
          "options": ["1% decrease", "5% increase", "No change", "1% increase"],
          "answer": 0,
          "explanation": "Multiplying factor = 1.20 × 1.10 × 0.75 = 1.32 × 0.75 = 0.99.<br>So the salary becomes 99% of the original → <b>1% decrease</b>."
        },
        {
          "q": "In an election between two candidates, 20% of the votes cast were invalid. The winner got 58% of the valid votes and won by 2,880 votes. What was the total number of votes cast?",
          "options": ["21600", "18000", "22500", "24000"],
          "answer": 2,
          "explanation": "Loser got 42% of valid votes. Margin = 58% − 42% = 16% of valid votes = 2880 → valid votes = 18000.<br>Valid votes = 80% of total → total = 18000/0.8 = <b>22500</b>."
        },
        {
          "q": "A student scores 30% marks and fails by 24 marks. Another student scores 42% marks and gets 12 marks more than the pass marks. What are the pass marks?",
          "options": ["102", "120", "126", "114"],
          "answer": 3,
          "explanation": "(42% − 30%) of maximum = 24 + 12 = 36 → 12% of max = 36 → max = 300.<br>Pass marks = 30% of 300 + 24 = 90 + 24 = <b>114</b>.<br>Check: 42% of 300 = 126 = 114 + 12 ✓."
        },
        {
          "q": "The population of a town is 1,25,000. It increases by 4% in the first year and decreases by 5% in the second year. What is the population after 2 years?",
          "options": ["1,23,500", "1,24,000", "1,26,250", "1,23,750"],
          "answer": 0,
          "explanation": "After year 1: 125000 × 1.04 = 130000.<br>After year 2: 130000 × 0.95 = <b>1,23,500</b>."
        },
        {
          "q": "If the numerator of a fraction is increased by 20% and its denominator is decreased by 10%, the fraction becomes 16/27. What is the original fraction?",
          "options": ["2/3", "8/9", "5/9", "4/9"],
          "answer": 3,
          "explanation": "Let fraction = x/y. New fraction = 1.2x / 0.9y = (4/3)(x/y) = 16/27.<br>x/y = (16/27) × (3/4) = 48/108 = <b>4/9</b>."
        },
        {
          "q": "A's salary is 40% more than B's salary. By what percentage is B's salary less than A's salary?",
          "options": [
            "40%",
            "30%",
            "25 2/7%",
            "28 4/7%"
          ],
          "answer": 3,
          "explanation": "B is less by 40/(100 + 40) × 100 = 200/7 = 28 4/7%."
        },
        {
          "q": "What is 16 2/3% of 25% of 960?",
          "options": [
            "40",
            "60",
            "45",
            "48"
          ],
          "answer": 0,
          "explanation": "25% of 960 = 240; 16 2/3% = 1/6, so 240 × 1/6 = 40."
        },
        {
          "q": "A man spends 75% of his income. His income increases by 20% and his expenditure increases by 10%. By what percentage do his savings increase?",
          "options": [
            "30%",
            "50%",
            "40%",
            "25%"
          ],
          "answer": 1,
          "explanation": "Take income 100: expense 75, savings 25. New income 120, new expense 82.5, new savings 37.5. Increase = 12.5/25 × 100 = 50%."
        },
        {
          "q": "The population of a town is 1,33,100 now. It has been increasing at 10% per annum. What was the population 3 years ago?",
          "options": [
            "1,10,000",
            "99,000",
            "1,00,000",
            "1,03,000"
          ],
          "answer": 2,
          "explanation": "Population 3 years ago = 133100 ÷ (1.1)³ = 133100 ÷ 1.331 = 1,00,000."
        },
        {
          "q": "In an examination, 35% of the students failed in Hindi, 45% failed in English and 20% failed in both subjects. What percentage of students passed in both subjects?",
          "options": [
            "40%",
            "20%",
            "60%",
            "35%"
          ],
          "answer": 0,
          "explanation": "Failed in at least one = 35 + 45 − 20 = 60%. Passed in both = 100 − 60 = 40%."
        },
        {
          "q": "A 40-litre solution contains 15% alcohol. How many litres of water must be added to make the alcohol 12% of the solution?",
          "options": [
            "8 L",
            "12 L",
            "5 L",
            "10 L"
          ],
          "answer": 3,
          "explanation": "Alcohol = 6 L. New volume = 6/0.12 = 50 L, so water added = 50 − 40 = 10 L."
        },
        {
          "q": "If each side of a square is increased by 30%, by what percentage does its area increase?",
          "options": [
            "60%",
            "69%",
            "30%",
            "90%"
          ],
          "answer": 1,
          "explanation": "Net change = 30 + 30 + (30 × 30)/100 = 69%."
        },
        {
          "q": "The difference between 72% and 57% of a number is 93. What is 40% of that number?",
          "options": [
            "232",
            "264",
            "248",
            "372"
          ],
          "answer": 2,
          "explanation": "15% of the number = 93 → number = 620. 40% of 620 = 248."
        }
      ]
    },
    {
      "id": "profit-loss-discount",
      "name": "Profit, Loss & Discount",
      "notes": [
        {
          "heading": "Basic Formulas",
          "points": [
            "Profit = SP − CP; Profit% = (Profit/CP) × 100 (always on CP unless stated).",
            "SP = CP × (100 + P%)/100; SP = CP × (100 − L%)/100.",
            "Discount is always on Marked Price (MP): SP = MP × (100 − D%)/100.",
            "<b>Key ratio</b>: CP/MP = (100 − D%)/(100 + P%).",
            "If CP of x articles = SP of y articles → Profit% = [(x − y)/y] × 100 (loss if negative)."
          ]
        },
        {
          "heading": "Shortcuts & Tricks",
          "points": [
            "Successive discounts a% and b% = single discount of (a + b − ab/100)%.",
            "Two articles sold at the same SP, one at x% profit and the other at x% loss → always a <b>loss of x²/100 %</b>.",
            "Dishonest dealer (sells at CP with false weight): Gain% = [(True − False)/False] × 100.",
            "Buy x get y free → effective discount = [y/(x + y)] × 100%.",
            "If MP is x% above CP and discount is y%, profit% = x − y − xy/100."
          ]
        }
      ],
      "flashcards": [
        { "front": "CP/MP relation with discount D% and profit P%?", "back": "CP/MP = (100 − D)/(100 + P)" },
        { "front": "Single discount equal to successive a% and b%?", "back": "a + b − ab/100 %" },
        { "front": "Same SP, x% gain on one and x% loss on the other?", "back": "Net loss of x²/100 %" },
        { "front": "Gain% using 900 g instead of 1 kg (selling at CP)?", "back": "100/900 × 100 = 11 1/9 %" },
        { "front": "CP of x articles = SP of y articles → profit%?", "back": "(x − y)/y × 100" },
        { "front": "Buy 4 get 1 free → discount%?", "back": "1/5 × 100 = 20%" }
      ],
      "questions": [
        {
          "q": "The cost price of 20 articles is equal to the selling price of 16 articles. What is the profit percentage?",
          "options": ["20%", "25%", "16%", "24%"],
          "answer": 1,
          "explanation": "Let CP of 1 article = ₹1 → CP of 16 = ₹16, SP of 16 = CP of 20 = ₹20.<br>Profit% = (20 − 16)/16 × 100 = <b>25%</b>."
        },
        {
          "q": "A shopkeeper marks his goods 40% above the cost price and allows a discount of 15%. What is his profit percentage?",
          "options": ["25%", "21%", "19%", "17%"],
          "answer": 2,
          "explanation": "Let CP = 100 → MP = 140. SP = 140 × 0.85 = 119.<br>Profit = <b>19%</b>.<br>(Shortcut: 40 − 15 − (40×15)/100 = 19.)"
        },
        {
          "q": "Two successive discounts of 20% and 15% are equivalent to a single discount of:",
          "options": ["32%", "35%", "33%", "30%"],
          "answer": 0,
          "explanation": "Single discount = a + b − ab/100 = 20 + 15 − (20 × 15)/100 = 35 − 3 = <b>32%</b>."
        },
        {
          "q": "A dishonest dealer claims to sell goods at cost price but uses a weight of 900 g instead of 1 kg. What is his gain percentage?",
          "options": ["10%", "9 1/11%", "12%", "11 1/9%"],
          "answer": 3,
          "explanation": "Gain% = (True − False)/False × 100 = (1000 − 900)/900 × 100 = 100/9 = <b>11 1/9%</b>."
        },
        {
          "q": "A man sells two mobile phones for ₹9,900 each. On one he gains 10% and on the other he loses 10%. What is his overall result?",
          "options": ["No profit no loss", "Loss of ₹200", "Gain of ₹200", "Loss of ₹100"],
          "answer": 1,
          "explanation": "CP of first = 9900/1.1 = ₹9,000; CP of second = 9900/0.9 = ₹11,000.<br>Total CP = ₹20,000; total SP = ₹19,800.<br>Result: <b>Loss of ₹200</b> (= 1%, matching x²/100 = 1%)."
        },
        {
          "q": "A trader allows a discount of 20% on the marked price and still makes a profit of 12%. If he sells the article at the marked price (no discount), what will be his profit percentage?",
          "options": ["32%", "36%", "45%", "40%"],
          "answer": 3,
          "explanation": "CP/MP = (100 − 20)/(100 + 12) = 80/112 = 5/7.<br>So if CP = 5, MP = 7. Selling at MP gives profit = (7 − 5)/5 × 100 = <b>40%</b>."
        },
        {
          "q": "By selling an article for ₹1,140, a man loses 5%. At what price should he sell it to gain 5%?",
          "options": [
            "₹1,260",
            "₹1,197",
            "₹1,254",
            "₹1,300"
          ],
          "answer": 0,
          "explanation": "CP = 1140 ÷ 0.95 = ₹1,200. For 5% gain, SP = 1200 × 1.05 = ₹1,260."
        },
        {
          "q": "After two successive discounts of 15% and 8%, an article is sold for ₹1,955. What is its marked price?",
          "options": [
            "₹2,400",
            "₹2,500",
            "₹2,550",
            "₹2,600"
          ],
          "answer": 1,
          "explanation": "MP × 0.85 × 0.92 = 1955 → MP = 1955 ÷ 0.782 = ₹2,500."
        },
        {
          "q": "A shopkeeper offers 'buy 4, get 1 free' and still makes a profit of 20%. By what percentage above the cost price has he marked his goods?",
          "options": [
            "40%",
            "25%",
            "50%",
            "44%"
          ],
          "answer": 2,
          "explanation": "He gets the price of 4 for 5 items: 4 × MP = 5 × 1.2 × CP → MP = 1.5 × CP, i.e. 50% above CP."
        },
        {
          "q": "A dishonest shopkeeper sells his goods at a loss of 10% on cost price but uses a weight of 800 g instead of 1 kg. What is his overall gain percentage?",
          "options": [
            "10%",
            "8%",
            "15%",
            "12.5%"
          ],
          "answer": 3,
          "explanation": "Let CP be ₹1 per g. For '1 kg' he charges 0.9 × 1000 = ₹900 but gives only 800 g (cost ₹800). Gain = 100/800 × 100 = 12.5%."
        },
        {
          "q": "A vendor buys oranges at 6 for ₹5 and sells them at 5 for ₹6. What is his profit percentage?",
          "options": [
            "44%",
            "20%",
            "36%",
            "40%"
          ],
          "answer": 0,
          "explanation": "CP per orange = 5/6, SP per orange = 6/5. Profit% = (6/5 ÷ 5/6 − 1) × 100 = (36/25 − 1) × 100 = 44%."
        },
        {
          "q": "The profit earned by selling an article for ₹1,320 is equal to the loss incurred when it is sold for ₹880. At what price should it be sold to make a profit of 25%?",
          "options": [
            "₹1,320",
            "₹1,400",
            "₹1,250",
            "₹1,375"
          ],
          "answer": 3,
          "explanation": "CP = (1320 + 880)/2 = ₹1,100. SP for 25% profit = 1100 × 1.25 = ₹1,375."
        },
        {
          "q": "A sells a bicycle to B at a profit of 20%, and B sells it to C at a profit of 10%. If C pays ₹2,640 for it, what did A pay for it?",
          "options": [
            "₹1,980",
            "₹2,000",
            "₹2,100",
            "₹2,200"
          ],
          "answer": 1,
          "explanation": "A's CP × 1.2 × 1.1 = 2640 → A's CP = 2640 ÷ 1.32 = ₹2,000."
        },
        {
          "q": "A man sells an article at a loss of 12%. Had he sold it for ₹56 more, he would have gained 4%. What is the cost price of the article?",
          "options": [
            "₹400",
            "₹336",
            "₹350",
            "₹466"
          ],
          "answer": 2,
          "explanation": "The difference 4% − (−12%) = 16% of CP = ₹56 → CP = 56 ÷ 0.16 = ₹350."
        }
      ]
    },
    {
      "id": "ratio-proportion",
      "name": "Ratio, Proportion & Partnership",
      "notes": [
        {
          "heading": "Ratio & Proportion",
          "points": [
            "a : b = c : d ⇔ ad = bc (product of extremes = product of means).",
            "Mean proportional of a and b = √(ab); third proportional of a, b = b²/a; fourth proportional of a, b, c = bc/a.",
            "Duplicate ratio a² : b²; sub-duplicate √a : √b; triplicate a³ : b³; compounded ratio of a:b and c:d = ac : bd.",
            "Combining A:B and B:C → make B common using LCM (A:B = 2:3, B:C = 4:5 → 8:12:15).",
            "If a/b = c/d, then (a + b)/(a − b) = (c + d)/(c − d) (componendo–dividendo)."
          ]
        },
        {
          "heading": "Partnership",
          "points": [
            "Profit share ∝ Capital × Time.",
            "If capital changes mid-year, compute Σ(capital × months) for each partner.",
            "Working partner's salary/commission is deducted first, then the rest is shared in the capital-time ratio."
          ]
        },
        {
          "heading": "Mixtures & Alligation",
          "points": [
            "Alligation: Quantity of cheaper : Quantity of dearer = (Dearer − Mean) : (Mean − Cheaper).",
            "Works for prices, concentrations, speeds, averages — any weighted mean.",
            "Replacement: from V litres of pure liquid, x litres removed and replaced by water n times → pure left = V(1 − x/V)<sup>n</sup>.",
            "Mixing solutions: add the pure component amounts separately, then form the new ratio."
          ]
        }
      ],
      "flashcards": [
        { "front": "Mean proportional between a and b?", "back": "√(ab)" },
        { "front": "Third proportional to a and b?", "back": "b²/a" },
        { "front": "Fourth proportional to a, b, c?", "back": "bc/a" },
        { "front": "Rule of alligation?", "back": "Cheaper : Dearer = (Dearer − Mean) : (Mean − Cheaper)" },
        { "front": "Pure liquid left after n replacements of x from V?", "back": "V(1 − x/V)<sup>n</sup>" },
        { "front": "Partnership profit is shared in the ratio of?", "back": "Capital × Time" },
        { "front": "Sub-duplicate ratio of a : b?", "back": "√a : √b" }
      ],
      "questions": [
        {
          "q": "If A : B = 2 : 3 and B : C = 4 : 5, then A : B : C is:",
          "options": ["8 : 12 : 15", "2 : 3 : 5", "8 : 12 : 5", "6 : 12 : 15"],
          "answer": 0,
          "explanation": "Make B common: LCM(3, 4) = 12.<br>A : B = 2 : 3 = 8 : 12; B : C = 4 : 5 = 12 : 15.<br>A : B : C = <b>8 : 12 : 15</b>."
        },
        {
          "q": "What is the mean proportional between 12 and 75?",
          "options": ["36", "45", "30", "25"],
          "answer": 2,
          "explanation": "Mean proportional = √(12 × 75) = √900 = <b>30</b>."
        },
        {
          "q": "A and B start a business with ₹40,000 and ₹60,000 respectively. After 4 months, A invests ₹20,000 more. If the total profit at the end of the year is ₹34,000, what is B's share?",
          "options": ["₹16,000", "₹18,000", "₹17,000", "₹20,400"],
          "answer": 1,
          "explanation": "A's capital-months = 40000 × 4 + 60000 × 8 = 160000 + 480000 = 640000.<br>B's capital-months = 60000 × 12 = 720000.<br>Ratio A : B = 640 : 720 = 8 : 9.<br>B's share = 34000 × 9/17 = <b>₹18,000</b>."
        },
        {
          "q": "In what ratio must rice costing ₹42 per kg be mixed with rice costing ₹54 per kg so that the mixture is worth ₹46.50 per kg?",
          "options": ["3 : 5", "7 : 3", "4 : 3", "5 : 3"],
          "answer": 3,
          "explanation": "Alligation: Cheaper : Dearer = (54 − 46.50) : (46.50 − 42) = 7.5 : 4.5 = <b>5 : 3</b>."
        },
        {
          "q": "A container has 60 litres of pure milk. 6 litres of milk is taken out and replaced with water. This process is done 3 times in all. How much milk is left in the container?",
          "options": ["42 L", "45.36 L", "43.74 L", "48.6 L"],
          "answer": 2,
          "explanation": "Milk left = V(1 − x/V)<sup>n</sup> = 60 × (1 − 6/60)³ = 60 × (0.9)³ = 60 × 0.729 = <b>43.74 L</b>."
        },
        {
          "q": "Two numbers are in the ratio 3 : 5. If 9 is subtracted from each, the ratio becomes 12 : 23. What is the smaller number?",
          "options": ["33", "27", "36", "39"],
          "answer": 0,
          "explanation": "Let numbers be 3x and 5x. (3x − 9)/(5x − 9) = 12/23.<br>23(3x − 9) = 12(5x − 9) → 69x − 207 = 60x − 108 → 9x = 99 → x = 11.<br>Smaller number = 3 × 11 = <b>33</b>. Check: 24/46 = 12/23 ✓."
        },
        {
          "q": "What is the third proportional to 12 and 18?",
          "options": [
            "27",
            "24",
            "36",
            "30"
          ],
          "answer": 0,
          "explanation": "Third proportional = b²/a = 18²/12 = 324/12 = 27."
        },
        {
          "q": "What is the fourth proportional to 5, 8 and 15?",
          "options": [
            "20",
            "24",
            "25",
            "40"
          ],
          "answer": 1,
          "explanation": "Fourth proportional = (b × c)/a = (8 × 15)/5 = 24."
        },
        {
          "q": "₹1,560 is divided among A, B and C in the ratio 1/2 : 1/3 : 1/4. What is B's share?",
          "options": [
            "₹480",
            "₹360",
            "₹520",
            "₹720"
          ],
          "answer": 0,
          "explanation": "1/2 : 1/3 : 1/4 = 6 : 4 : 3 (multiply by 12). B = 1560 × 4/13 = ₹480."
        },
        {
          "q": "A bag contains ₹1, 50 paise and 25 paise coins in the ratio 5 : 6 : 8. If the total amount is ₹210, how many 50 paise coins are there?",
          "options": [
            "105",
            "168",
            "84",
            "126"
          ],
          "answer": 3,
          "explanation": "Let the coins be 5k, 6k, 8k. Value = 5k + 3k + 2k = 10k = 210 → k = 21. 50 paise coins = 6 × 21 = 126."
        },
        {
          "q": "The incomes of A and B are in the ratio 3 : 2 and their expenditures are in the ratio 5 : 3. If each of them saves ₹2,000, what is A's income?",
          "options": [
            "₹10,000",
            "₹9,000",
            "₹12,000",
            "₹15,000"
          ],
          "answer": 2,
          "explanation": "3x − 5y = 2000 and 2x − 3y = 2000 → x = 4000, y = 2000. A's income = 3 × 4000 = ₹12,000."
        },
        {
          "q": "A and B invest in a business in the ratio 3 : 5. A is a working partner and receives 10% of the profit for managing it; the rest is divided in the ratio of investments. If the total profit is ₹48,000, what does A receive in all?",
          "options": [
            "₹18,000",
            "₹16,200",
            "₹22,800",
            "₹21,000"
          ],
          "answer": 3,
          "explanation": "A's management share = ₹4,800. Remaining ₹43,200 × 3/8 = ₹16,200. A's total = 4800 + 16200 = ₹21,000."
        },
        {
          "q": "A 40-litre mixture contains milk and water in the ratio 3 : 1. How much water must be added to make the ratio 3 : 2?",
          "options": [
            "20 L",
            "10 L",
            "15 L",
            "5 L"
          ],
          "answer": 1,
          "explanation": "Milk = 30 L, water = 10 L. For 3 : 2, water should be 20 L, so add 20 − 10 = 10 L."
        },
        {
          "q": "Alloy A contains gold and copper in the ratio 7 : 2 and alloy B contains them in the ratio 7 : 11. If equal quantities of the two alloys are melted together, what is the ratio of gold to copper in the new alloy?",
          "options": [
            "5 : 7",
            "14 : 13",
            "7 : 5",
            "7 : 13"
          ],
          "answer": 2,
          "explanation": "Take 18 kg of each. Gold = 14 + 7 = 21, copper = 4 + 11 = 15. Ratio = 21 : 15 = 7 : 5."
        }
      ]
    },
    {
      "id": "averages",
      "name": "Averages",
      "notes": [
        {
          "heading": "Basic Results",
          "points": [
            "Average = Sum of observations / Number of observations.",
            "Average of consecutive numbers (or any AP) = (first + last)/2 = middle term.",
            "Average of first n natural numbers = (n + 1)/2; first n even numbers = n + 1; first n odd numbers = n.",
            "Average of squares of first n natural numbers = (n + 1)(2n + 1)/6.",
            "If every value is increased by k, average increases by k; if multiplied by k, average is multiplied by k."
          ]
        },
        {
          "heading": "Replacement & Correction",
          "points": [
            "One member replaced, average changes by d for n members: New − Old = n × d.",
            "New member added and average rises by d: New member = old average + (n + 1) × d.",
            "Wrongly recorded values: correct sum = wrong sum − wrong values + correct values.",
            "Cricket: runs needed in next innings = (n + 1) × new average − n × old average."
          ]
        },
        {
          "heading": "Average Speed",
          "points": [
            "Equal distances at speeds x and y: average speed = 2xy/(x + y).",
            "Equal distances at x, y, z: average speed = 3xyz/(xy + yz + zx).",
            "Equal time intervals at x and y: average speed = (x + y)/2."
          ]
        }
      ],
      "flashcards": [
        { "front": "Average of first n odd natural numbers?", "back": "n" },
        { "front": "Average of first n even natural numbers?", "back": "n + 1" },
        { "front": "Average speed for equal distances at x and y?", "back": "2xy/(x + y)" },
        { "front": "One person of n replaced, average rises by d. New person's value?", "back": "Old person's value + n × d" },
        { "front": "Runs needed in next innings to raise average?", "back": "(n + 1) × new avg − n × old avg" },
        { "front": "Average of first n natural numbers?", "back": "(n + 1)/2" }
      ],
      "questions": [
        {
          "q": "The average of five consecutive odd numbers is 27. What is the largest of these numbers?",
          "options": ["29", "31", "33", "35"],
          "answer": 1,
          "explanation": "For consecutive odd numbers, the average is the middle (3rd) number = 27.<br>Numbers: 23, 25, 27, 29, 31. Largest = <b>31</b>."
        },
        {
          "q": "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
          "options": ["85 kg", "80 kg", "75 kg", "90 kg"],
          "answer": 0,
          "explanation": "Total increase = 8 × 2.5 = 20 kg.<br>New person = 65 + 20 = <b>85 kg</b>."
        },
        {
          "q": "The average of 11 results is 50. The average of the first six results is 49 and that of the last six results is 52. What is the sixth result?",
          "options": ["50", "54", "58", "56"],
          "answer": 3,
          "explanation": "Sum of first six = 6 × 49 = 294; sum of last six = 6 × 52 = 312; total of 11 = 11 × 50 = 550.<br>The 6th result is counted twice: 294 + 312 − 550 = <b>56</b>."
        },
        {
          "q": "A batsman has an average of 32 runs in 10 innings. How many runs must he score in the 11th innings to increase his average by 4 runs?",
          "options": ["72", "76", "80", "68"],
          "answer": 1,
          "explanation": "Current total = 10 × 32 = 320. Required total after 11 innings = 11 × 36 = 396.<br>Runs needed = 396 − 320 = <b>76</b>."
        },
        {
          "q": "A car travels from A to B at 40 km/h and returns from B to A at 60 km/h. What is its average speed for the whole journey?",
          "options": ["50 km/h", "45 km/h", "48 km/h", "52 km/h"],
          "answer": 2,
          "explanation": "Equal distances: average speed = 2xy/(x + y) = (2 × 40 × 60)/(40 + 60) = 4800/100 = <b>48 km/h</b>."
        },
        {
          "q": "The average of 25 numbers was found to be 36. Later it was discovered that two numbers, 48 and 63, were wrongly read as 84 and 36. What is the correct average?",
          "options": ["35.64", "36.36", "35.46", "36"],
          "answer": 0,
          "explanation": "Wrong sum = 25 × 36 = 900.<br>Correct sum = 900 − (84 + 36) + (48 + 63) = 900 − 120 + 111 = 891.<br>Correct average = 891/25 = <b>35.64</b>."
        },
        {
          "q": "What is the average of the squares of the first 10 natural numbers?",
          "options": [
            "38.5",
            "55",
            "35",
            "40.5"
          ],
          "answer": 0,
          "explanation": "Sum of squares = 10 × 11 × 21/6 = 385. Average = 385/10 = 38.5."
        },
        {
          "q": "The average age of a family of 5 members is 24 years. If the age of the youngest member is 8 years, what was the average age of the family at the time of the birth of the youngest member?",
          "options": [
            "16 years",
            "20 years",
            "19.2 years",
            "22 years"
          ],
          "answer": 1,
          "explanation": "Present total = 120. 8 years ago the other 4 members had total 120 − 8 − 4 × 8 = 80. Average = 80/4 = 20 years."
        },
        {
          "q": "The average marks of 30 students in section A is 60. When section B is combined with section A, the average of all 80 students becomes 66. What is the average marks of section B?",
          "options": [
            "72",
            "70.4",
            "69.6",
            "68"
          ],
          "answer": 2,
          "explanation": "Total = 80 × 66 = 5280; section A total = 1800. Section B = (5280 − 1800)/50 = 69.6."
        },
        {
          "q": "The average age of 24 students in a class is 12 years. When the teacher's age is included, the average increases by 1 year. What is the age of the teacher?",
          "options": [
            "36 years",
            "25 years",
            "38 years",
            "37 years"
          ],
          "answer": 3,
          "explanation": "Teacher = new average × 25 − old total = 13 × 25 − 24 × 12 = 325 − 288 = 37 years."
        },
        {
          "q": "Of three numbers, the first is twice the second and the second is thrice the third. If their average is 30, what is the largest number?",
          "options": [
            "54",
            "27",
            "60",
            "45"
          ],
          "answer": 0,
          "explanation": "Let third = x, second = 3x, first = 6x. 10x = 90 → x = 9. Largest = 6 × 9 = 54."
        },
        {
          "q": "A person covers three equal distances at speeds of 10 km/h, 20 km/h and 30 km/h respectively. What is his average speed for the whole journey?",
          "options": [
            "20 km/h",
            "18 km/h",
            "15 5/11 km/h",
            "16 4/11 km/h"
          ],
          "answer": 3,
          "explanation": "Average speed = 3xyz/(xy + yz + zx) = 3 × 6000/(200 + 600 + 300) = 18000/1100 = 16 4/11 km/h."
        },
        {
          "q": "The average of 7 consecutive numbers is 20. If the next three consecutive numbers are also included, what is the new average?",
          "options": [
            "21",
            "21.5",
            "23",
            "22.5"
          ],
          "answer": 1,
          "explanation": "The numbers are 17 to 23 (sum 140). Adding 24, 25 and 26 gives sum 215. New average = 215/10 = 21.5."
        },
        {
          "q": "A batsman scores 87 runs in his 17th innings and thereby increases his average by 3 runs. What is his average after the 17th innings?",
          "options": [
            "36",
            "42",
            "39",
            "40"
          ],
          "answer": 2,
          "explanation": "Let average after 16 innings = a. 16a + 87 = 17(a + 3) → a = 36. New average = 39."
        }
      ]
    },
    {
      "id": "simple-compound-interest",
      "name": "Simple & Compound Interest",
      "notes": [
        {
          "heading": "Simple Interest",
          "points": [
            "SI = (P × R × T)/100; Amount A = P + SI.",
            "Sum becomes n times in T years at SI → R = 100(n − 1)/T.",
            "If a sum doubles in T years at SI, it becomes k times in (k − 1)T years.",
            "SI is the same every year (linear growth)."
          ]
        },
        {
          "heading": "Compound Interest",
          "points": [
            "A = P(1 + R/100)<sup>T</sup>; CI = A − P.",
            "Half-yearly: rate R/2, time 2T. Quarterly: rate R/4, time 4T.",
            "Different rates each year: A = P(1 + R<sub>1</sub>/100)(1 + R<sub>2</sub>/100)(1 + R<sub>3</sub>/100).",
            "Effective rate for 2 years = 2R + R²/100 %; for 3 years = 3R + 3R²/100 + R³/10000 %.",
            "If amounts for consecutive years are A<sub>1</sub> and A<sub>2</sub>, rate = (A<sub>2</sub> − A<sub>1</sub>)/A<sub>1</sub> × 100.",
            "If a sum becomes k times in T years at CI, it becomes k<sup>n</sup> times in nT years."
          ]
        },
        {
          "heading": "CI − SI Shortcuts",
          "points": [
            "2 years: CI − SI = P(R/100)².",
            "3 years: CI − SI = P(R/100)²(3 + R/100).",
            "Standard values at 10%: 2 years → 21%, 3 years → 33.1%. At 5%: 2 years → 10.25%."
          ]
        }
      ],
      "flashcards": [
        { "front": "CI − SI for 2 years?", "back": "P(R/100)²" },
        { "front": "CI − SI for 3 years?", "back": "P(R/100)²(3 + R/100)" },
        { "front": "Effective CI rate for 2 years at R%?", "back": "2R + R²/100 %" },
        { "front": "Compounding half-yearly — change in R and T?", "back": "Rate becomes R/2, time becomes 2T" },
        { "front": "Sum doubles in T years at SI. Rate?", "back": "R = 100/T %" },
        { "front": "Sum doubles in 5 years at CI. When does it become 8 times?", "back": "15 years (2³ → 3 × 5)" },
        { "front": "Rate from amounts of two consecutive years A<sub>1</sub>, A<sub>2</sub> (CI)?", "back": "(A<sub>2</sub> − A<sub>1</sub>)/A<sub>1</sub> × 100" }
      ],
      "questions": [
        {
          "q": "What is the simple interest on ₹8,000 at 7.5% per annum for 3 years 4 months?",
          "options": ["₹1,800", "₹2,000", "₹2,400", "₹2,200"],
          "answer": 1,
          "explanation": "T = 3 years 4 months = 10/3 years.<br>SI = (8000 × 7.5 × 10/3)/100 = (8000 × 25)/100 = <b>₹2,000</b>."
        },
        {
          "q": "What is the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually?",
          "options": ["₹2,000", "₹2,200", "₹2,210", "₹2,100"],
          "answer": 3,
          "explanation": "A = 10000 × (1.1)² = 10000 × 1.21 = ₹12,100.<br>CI = 12100 − 10000 = <b>₹2,100</b>. (Effective 2-year rate at 10% = 21%.)"
        },
        {
          "q": "The difference between the compound interest and the simple interest on a sum for 2 years at 8% per annum is ₹96. What is the sum?",
          "options": ["₹15,000", "₹12,000", "₹16,000", "₹18,000"],
          "answer": 0,
          "explanation": "CI − SI (2 years) = P(R/100)² → 96 = P × (8/100)² = P × 0.0064.<br>P = 96/0.0064 = <b>₹15,000</b>."
        },
        {
          "q": "A sum of money at compound interest amounts to ₹6,050 in 2 years and to ₹6,655 in 3 years. What is the principal?",
          "options": ["₹5,500", "₹4,800", "₹5,000", "₹5,250"],
          "answer": 2,
          "explanation": "Interest in 3rd year = 6655 − 6050 = 605 → rate = 605/6050 × 100 = 10%.<br>P = 6050/(1.1)² = 6050/1.21 = <b>₹5,000</b>."
        },
        {
          "q": "A sum of money doubles itself in 8 years at simple interest. In how many years will it become 4 times itself at the same rate?",
          "options": ["16 years", "24 years", "32 years", "20 years"],
          "answer": 1,
          "explanation": "Doubling means SI = P in 8 years → R = 100/8 = 12.5%.<br>To become 4 times, SI = 3P → time = 3 × 8 = <b>24 years</b>."
        },
        {
          "q": "What is the compound interest on ₹16,000 at 10% per annum for 1½ years, compounded half-yearly?",
          "options": ["₹2,400", "₹2,480", "₹2,640", "₹2,522"],
          "answer": 3,
          "explanation": "Half-yearly: rate = 5% per half-year, periods = 3.<br>A = 16000 × (1.05)³ → 16000 → 16800 → 17640 → 18522.<br>CI = 18522 − 16000 = <b>₹2,522</b>."
        },
        {
          "q": "A sum of money at simple interest amounts to ₹9,440 in 3 years and to ₹10,400 in 5 years. What is the rate of interest per annum?",
          "options": [
            "6%",
            "5%",
            "8%",
            "7.5%"
          ],
          "answer": 0,
          "explanation": "SI for 2 years = 10400 − 9440 = ₹960, so ₹480 per year; P = 9440 − 3 × 480 = ₹8,000.<br>Rate = 480/8000 × 100 = 6%."
        },
        {
          "q": "What is the compound interest on ₹12,500 for 3 years if the rates of interest are 8%, 10% and 12% for the first, second and third years respectively?",
          "options": [
            "₹3,750",
            "₹4,132",
            "₹4,500",
            "₹4,212"
          ],
          "answer": 1,
          "explanation": "A = 12500 × 1.08 × 1.10 × 1.12 = ₹16,632.<br>CI = 16632 − 12500 = ₹4,132."
        },
        {
          "q": "The difference between the compound interest and the simple interest on a sum for 3 years at 10% per annum (compounded annually) is ₹310. What is the sum?",
          "options": [
            "₹12,000",
            "₹9,000",
            "₹10,000",
            "₹15,500"
          ],
          "answer": 2,
          "explanation": "CI − SI (3 years) = P(R/100)²(3 + R/100) = P × 0.01 × 3.1 = 0.031P.<br>0.031P = 310 ⇒ P = ₹10,000."
        },
        {
          "q": "A sum of money becomes 8 times itself in 6 years at compound interest (compounded annually). In how many years will it become 32 times itself at the same rate?",
          "options": [
            "12 years",
            "8 years",
            "24 years",
            "10 years"
          ],
          "answer": 3,
          "explanation": "8 = 2³ in 6 years ⇒ the sum doubles every 2 years.<br>32 = 2⁵ ⇒ 5 × 2 = 10 years."
        },
        {
          "q": "A sum borrowed at 10% per annum compound interest (compounded annually) is repaid in two equal annual instalments of ₹12,100 each. What was the sum borrowed?",
          "options": [
            "₹21,000",
            "₹22,000",
            "₹24,200",
            "₹20,000"
          ],
          "answer": 0,
          "explanation": "Sum = present value of instalments = 12100/1.1 + 12100/(1.1)² = 11000 + 10000 = ₹21,000."
        },
        {
          "q": "What is the difference between the compound interest on ₹20,000 for 1 year at 10% per annum when compounded half-yearly and when compounded annually?",
          "options": [
            "₹25",
            "₹50",
            "₹100",
            "₹55"
          ],
          "answer": 1,
          "explanation": "Half-yearly: 20000 × (1.05² − 1) = ₹2,050. Annually: ₹2,000.<br>Difference = ₹50."
        },
        {
          "q": "₹15,000 is divided into two parts such that one part is lent at 8% and the other at 10% per annum simple interest. If the total interest for one year is ₹1,340, what is the part lent at 8%?",
          "options": [
            "₹7,000",
            "₹6,500",
            "₹8,000",
            "₹9,000"
          ],
          "answer": 2,
          "explanation": "0.08x + 0.10(15000 − x) = 1340 ⇒ 1500 − 0.02x = 1340 ⇒ x = ₹8,000."
        },
        {
          "q": "At what rate of compound interest per annum (compounded annually) will ₹6,400 amount to ₹7,225 in 2 years?",
          "options": [
            "6½%",
            "6%",
            "7½%",
            "6¼%"
          ],
          "answer": 3,
          "explanation": "(1 + R/100)² = 7225/6400 = (85/80)² ⇒ 1 + R/100 = 17/16.<br>R = 100/16 = 6¼%."
        }
      ]
    },
    {
      "id": "time-work",
      "name": "Time & Work",
      "notes": [
        {
          "heading": "Core Concepts",
          "points": [
            "If A does a work in n days, A's one-day work = 1/n.",
            "A and B together: time = ab/(a + b). A, B, C together: abc/(ab + bc + ca).",
            "<b>LCM method</b>: take total work = LCM of individual times; efficiency = total work / time.",
            "Efficiency ∝ 1/time. If A is k times as efficient as B, A takes 1/k of B's time.",
            "M<sub>1</sub>D<sub>1</sub>H<sub>1</sub>/W<sub>1</sub> = M<sub>2</sub>D<sub>2</sub>H<sub>2</sub>/W<sub>2</sub> (men, days, hours, work)."
          ]
        },
        {
          "heading": "Leaving/Joining & Wages",
          "points": [
            "If someone leaves x days before completion, assume total T days and write each person's work in terms of T.",
            "Wages are divided in the ratio of work done (= efficiency × days worked).",
            "If A + B take x days and A alone takes y days, B alone takes xy/(y − x) days."
          ]
        },
        {
          "heading": "Pipes & Cisterns",
          "points": [
            "Inlet pipe → positive work; outlet/leak → negative work.",
            "A fills in x h, B empties in y h (y > x): both open → tank fills in xy/(y − x) h.",
            "Leak: a pipe fills in x h but takes y h due to a leak → leak alone empties in xy/(y − x) h."
          ]
        }
      ],
      "flashcards": [
        { "front": "A in a days, B in b days: together?", "back": "ab/(a + b) days" },
        { "front": "A, B, C in a, b, c days: together?", "back": "abc/(ab + bc + ca) days" },
        { "front": "Chain rule formula for men, days, hours, work?", "back": "M<sub>1</sub>D<sub>1</sub>H<sub>1</sub>/W<sub>1</sub> = M<sub>2</sub>D<sub>2</sub>H<sub>2</sub>/W<sub>2</sub>" },
        { "front": "Filler x h, emptier y h (y > x): net time?", "back": "xy/(y − x) hours" },
        { "front": "A + B together x days, A alone y days: B alone?", "back": "xy/(y − x) days" },
        { "front": "How are wages shared?", "back": "In the ratio of work done by each" }
      ],
      "questions": [
        {
          "q": "A can complete a work in 12 days and B in 18 days. In how many days can they complete it working together?",
          "options": ["7.2 days", "6 days", "7.5 days", "8 days"],
          "answer": 0,
          "explanation": "Together = ab/(a + b) = (12 × 18)/(12 + 18) = 216/30 = <b>7.2 days</b>.<br>(LCM method: total 36 units; A = 3, B = 2 per day → 36/5 = 7.2.)"
        },
        {
          "q": "A and B together can finish a work in 15 days, and B alone can finish it in 20 days. In how many days can A alone finish it?",
          "options": ["45 days", "60 days", "30 days", "40 days"],
          "answer": 1,
          "explanation": "A's one-day work = 1/15 − 1/20 = (4 − 3)/60 = 1/60.<br>A alone takes <b>60 days</b>."
        },
        {
          "q": "12 men can complete a work in 18 days working 8 hours a day. In how many days can 16 men complete the same work working 9 hours a day?",
          "options": ["10 days", "14 days", "12 days", "16 days"],
          "answer": 2,
          "explanation": "M<sub>1</sub>D<sub>1</sub>H<sub>1</sub> = M<sub>2</sub>D<sub>2</sub>H<sub>2</sub> → 12 × 18 × 8 = 16 × D × 9.<br>1728 = 144D → D = <b>12 days</b>."
        },
        {
          "q": "Pipes A and B can fill a tank in 20 minutes and 30 minutes respectively, while pipe C can empty the full tank in 15 minutes. If all three are opened together on an empty tank, in how much time will the tank be filled?",
          "options": ["45 min", "50 min", "40 min", "60 min"],
          "answer": 3,
          "explanation": "Take tank = LCM(20, 30, 15) = 60 units. A = +3, B = +2, C = −4 units/min.<br>Net = 3 + 2 − 4 = 1 unit/min → time = 60/1 = <b>60 min</b>."
        },
        {
          "q": "A is twice as efficient as B, and together they finish a work in 14 days. In how many days can A alone finish the work?",
          "options": ["28 days", "21 days", "42 days", "18 days"],
          "answer": 1,
          "explanation": "Efficiency A : B = 2 : 1 → combined 3 units/day. Total work = 3 × 14 = 42 units.<br>A alone = 42/2 = <b>21 days</b>."
        },
        {
          "q": "A can do a work in 20 days and B in 30 days. They start working together, but A leaves 5 days before the work is completed. In how many days is the total work completed?",
          "options": ["15 days", "12 days", "14 days", "16 days"],
          "answer": 0,
          "explanation": "Let total time = T days. B works T days, A works (T − 5) days.<br>(T − 5)/20 + T/30 = 1 → multiply by 60: 3(T − 5) + 2T = 60 → 5T = 75 → T = <b>15 days</b>."
        },
        {
          "q": "A and B can do a piece of work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A alone do the work?",
          "options": [
            "30 days",
            "24 days",
            "40 days",
            "60 days"
          ],
          "answer": 0,
          "explanation": "2(A + B + C) = 1/12 + 1/15 + 1/20 = 1/5 ⇒ A + B + C = 1/10.<br>A = 1/10 − 1/15 (B + C) = 1/30 ⇒ 30 days."
        },
        {
          "q": "A can do a work in 6 days and B in 8 days. With the help of C, they finish the work in 3 days and receive ₹3,200 in all. What is C's share?",
          "options": [
            "₹600",
            "₹400",
            "₹800",
            "₹1,200"
          ],
          "answer": 1,
          "explanation": "In 3 days A does 3/6 = 1/2, B does 3/8; C does 1 − 1/2 − 3/8 = 1/8 of the work.<br>C's share = 1/8 × 3200 = ₹400."
        },
        {
          "q": "A pipe can fill a tank in 8 hours, but because of a leak at the bottom it takes 10 hours to fill it. In how many hours can the leak alone empty the full tank?",
          "options": [
            "18 hours",
            "20 hours",
            "40 hours",
            "80 hours"
          ],
          "answer": 2,
          "explanation": "Leak rate = 1/8 − 1/10 = 1/40 of the tank per hour.<br>Leak empties the full tank in 40 hours."
        },
        {
          "q": "3 men or 5 women can complete a work in 15 days. In how many days can 6 men and 5 women together complete the same work?",
          "options": [
            "6 days",
            "7½ days",
            "4 days",
            "5 days"
          ],
          "answer": 3,
          "explanation": "3 men = 5 women, so 5 women = 3 men and 6 men + 5 women = 9 men.<br>Work = 3 × 15 = 45 man-days ⇒ 45/9 = 5 days."
        },
        {
          "q": "A can complete a work in 12 days and B in 16 days. They work on alternate days, starting with A. In how many days will the work be completed?",
          "options": [
            "13⅔ days",
            "14 days",
            "13½ days",
            "13¼ days"
          ],
          "answer": 0,
          "explanation": "Total work = 48 units; A = 4/day, B = 3/day; every 2 days = 7 units. 12 days → 42 units; day 13 (A) → 46 units.<br>Remaining 2 units by B take 2/3 day ⇒ 13⅔ days."
        },
        {
          "q": "A is 60% more efficient than B. If B alone can complete a work in 24 days, in how many days can A and B together complete it?",
          "options": [
            "10 days",
            "9 3/13 days",
            "12 days",
            "9⅓ days"
          ],
          "answer": 1,
          "explanation": "A takes 24/1.6 = 15 days. Together: (15 × 24)/(15 + 24) = 360/39 = 120/13 = 9 3/13 days."
        },
        {
          "q": "Two pipes A and B can fill a tank in 12 minutes and 15 minutes respectively. Both are opened together, and after 3 minutes pipe A is closed. How much more time will B take to fill the tank?",
          "options": [
            "9 min",
            "7 min 30 s",
            "8 min 15 s",
            "8 min 45 s"
          ],
          "answer": 2,
          "explanation": "In 3 min: 3/12 + 3/15 = 9/20 filled; remaining 11/20.<br>B needs 11/20 × 15 = 8.25 min = 8 min 15 s."
        },
        {
          "q": "15 men working 8 hours a day can dig a 60 m long trench in 10 days. How many men working 10 hours a day are needed to dig a 120 m long trench in 8 days?",
          "options": [
            "24",
            "36",
            "25",
            "30"
          ],
          "answer": 3,
          "explanation": "M₁D₁H₁/W₁ = M₂D₂H₂/W₂ ⇒ (15 × 10 × 8)/60 = (M × 8 × 10)/120.<br>M = 20 × 120/80 = 30."
        }
      ]
    },
    {
      "id": "time-speed-distance",
      "name": "Time, Speed & Distance",
      "notes": [
        {
          "heading": "Basics",
          "points": [
            "Distance = Speed × Time. 1 km/h = 5/18 m/s; 1 m/s = 18/5 km/h.",
            "If distance is constant, speed ∝ 1/time (speed ratio a : b → time ratio b : a).",
            "Late/early problems: d = (S<sub>1</sub>S<sub>2</sub>/(S<sub>2</sub> − S<sub>1</sub>)) × (total time difference).",
            "Relative speed: same direction = S<sub>1</sub> − S<sub>2</sub>; opposite direction = S<sub>1</sub> + S<sub>2</sub>.",
            "Two bodies start towards each other; after meeting they take t<sub>1</sub> and t<sub>2</sub> to reach destinations: S<sub>1</sub> : S<sub>2</sub> = √t<sub>2</sub> : √t<sub>1</sub>."
          ]
        },
        {
          "heading": "Trains",
          "points": [
            "Crossing a pole/man (stationary): time = length of train / speed.",
            "Crossing a platform/bridge: time = (train length + platform length) / speed.",
            "Two trains: time = (L<sub>1</sub> + L<sub>2</sub>) / relative speed.",
            "Crossing a man moving at v: use relative speed (S − v) same direction or (S + v) opposite."
          ]
        },
        {
          "heading": "Boats & Streams",
          "points": [
            "Downstream speed D = u + v; upstream speed U = u − v (u = boat in still water, v = stream).",
            "u = (D + U)/2; v = (D − U)/2.",
            "Round trip distance d each way: total time = d/(u + v) + d/(u − v) = 2ud/(u² − v²)."
          ]
        }
      ],
      "flashcards": [
        { "front": "Convert km/h to m/s", "back": "Multiply by 5/18 (e.g. 72 km/h = 20 m/s)" },
        { "front": "Time for train to cross a platform?", "back": "(Train length + Platform length)/Speed" },
        { "front": "Speed of boat in still water from D and U?", "back": "(D + U)/2" },
        { "front": "Speed of stream from D and U?", "back": "(D − U)/2" },
        { "front": "Meeting formula: after meeting times t<sub>1</sub>, t<sub>2</sub>", "back": "S<sub>1</sub> : S<sub>2</sub> = √t<sub>2</sub> : √t<sub>1</sub>" },
        { "front": "Relative speed in opposite directions?", "back": "Sum of speeds" },
        { "front": "Average speed for equal distances at x, y, z?", "back": "3xyz/(xy + yz + zx)" }
      ],
      "questions": [
        {
          "q": "A train 240 m long is running at 72 km/h. How long will it take to cross a pole?",
          "options": ["12 s", "10 s", "15 s", "18 s"],
          "answer": 0,
          "explanation": "72 km/h = 72 × 5/18 = 20 m/s.<br>Time = 240/20 = <b>12 s</b>."
        },
        {
          "q": "A train 180 m long crosses a platform 270 m long in 27 seconds. What is the speed of the train in km/h?",
          "options": ["54 km/h", "60 km/h", "66 km/h", "72 km/h"],
          "answer": 1,
          "explanation": "Distance = 180 + 270 = 450 m. Speed = 450/27 = 50/3 m/s.<br>In km/h: (50/3) × (18/5) = <b>60 km/h</b>."
        },
        {
          "q": "Two trains of lengths 150 m and 200 m are running on parallel tracks in opposite directions at 50 km/h and 40 km/h. In how much time will they cross each other completely?",
          "options": ["12 s", "16 s", "14 s", "35 s"],
          "answer": 2,
          "explanation": "Relative speed (opposite) = 50 + 40 = 90 km/h = 90 × 5/18 = 25 m/s.<br>Distance = 150 + 200 = 350 m. Time = 350/25 = <b>14 s</b>."
        },
        {
          "q": "A boat covers 36 km downstream in 3 hours and 24 km upstream in 4 hours. What is the speed of the stream?",
          "options": ["2 km/h", "4 km/h", "6 km/h", "3 km/h"],
          "answer": 3,
          "explanation": "Downstream speed = 36/3 = 12 km/h; upstream speed = 24/4 = 6 km/h.<br>Stream speed = (12 − 6)/2 = <b>3 km/h</b>. (Boat speed = 9 km/h.)"
        },
        {
          "q": "Walking at 5 km/h, a man reaches his office 6 minutes late. Walking at 6 km/h, he reaches 4 minutes early. What is the distance to his office?",
          "options": ["6 km", "5 km", "4 km", "7.5 km"],
          "answer": 1,
          "explanation": "Time difference = 6 + 4 = 10 min = 1/6 h.<br>d/5 − d/6 = 1/6 → d/30 = 1/6 → d = <b>5 km</b>.<br>(Check: 60 min vs 50 min.)"
        },
        {
          "q": "Two trains start at the same time from stations P and Q towards each other. After meeting, the train from P takes 9 hours and the train from Q takes 16 hours to reach their destinations. What is the ratio of speed of the train from P to that from Q?",
          "options": ["4 : 3", "3 : 4", "16 : 9", "9 : 16"],
          "answer": 0,
          "explanation": "S<sub>P</sub> : S<sub>Q</sub> = √(time of Q after meeting) : √(time of P after meeting) = √16 : √9 = <b>4 : 3</b>.<br>(The faster train needs less time after meeting.)"
        },
        {
          "q": "A car covers the first half of a journey at 40 km/h and the second half at 60 km/h. What is its average speed for the whole journey?",
          "options": [
            "48 km/h",
            "50 km/h",
            "52 km/h",
            "45 km/h"
          ],
          "answer": 0,
          "explanation": "For equal distances, average speed = 2xy/(x + y) = (2 × 40 × 60)/100 = 48 km/h."
        },
        {
          "q": "A train 200 m long passes a man walking at 6 km/h in the same direction as the train in 12 seconds. What is the speed of the train?",
          "options": [
            "60 km/h",
            "66 km/h",
            "54 km/h",
            "72 km/h"
          ],
          "answer": 1,
          "explanation": "Relative speed = 200/12 m/s = 50/3 × 18/5 = 60 km/h.<br>Train speed = 60 + 6 = 66 km/h."
        },
        {
          "q": "The speed of a boat in still water is 15 km/h and the speed of the stream is 3 km/h. How much time will the boat take to go 90 km downstream and come back?",
          "options": [
            "12 h",
            "13 h 30 min",
            "12 h 30 min",
            "10 h"
          ],
          "answer": 2,
          "explanation": "Time = 90/(15 + 3) + 90/(15 − 3) = 5 + 7.5 = 12.5 h = 12 h 30 min."
        },
        {
          "q": "A thief is spotted by a policeman from a distance of 300 m. The thief starts running at 10 km/h and the policeman chases him at 12 km/h at the same moment. How far will the thief have run before he is caught?",
          "options": [
            "1.8 km",
            "1.2 km",
            "2 km",
            "1.5 km"
          ],
          "answer": 3,
          "explanation": "Relative speed = 2 km/h; time to cover 0.3 km = 0.15 h.<br>Thief's distance = 10 × 0.15 = 1.5 km."
        },
        {
          "q": "Two trains 120 m and 180 m long are running on parallel tracks in the same direction at 54 km/h and 36 km/h respectively. In how much time will the faster train completely pass the slower one?",
          "options": [
            "60 s",
            "12 s",
            "30 s",
            "45 s"
          ],
          "answer": 0,
          "explanation": "Relative speed = 54 − 36 = 18 km/h = 5 m/s.<br>Time = (120 + 180)/5 = 60 s."
        },
        {
          "q": "Walking at 3/4 of his usual speed, a man reaches his office 20 minutes late. What is his usual time to reach the office?",
          "options": [
            "80 minutes",
            "1 hour",
            "45 minutes",
            "40 minutes"
          ],
          "answer": 1,
          "explanation": "At 3/4 speed, time becomes 4/3 of usual; extra time = (1/3) × usual = 20 min.<br>Usual time = 60 min = 1 hour."
        },
        {
          "q": "A train passes a pole in 15 seconds and a 100 m long platform in 25 seconds. What is the length of the train?",
          "options": [
            "125 m",
            "200 m",
            "150 m",
            "175 m"
          ],
          "answer": 2,
          "explanation": "L/15 = (L + 100)/25 ⇒ 25L = 15L + 1500 ⇒ L = 150 m."
        },
        {
          "q": "Two cars start at the same time from towns P and Q towards each other at 50 km/h and 40 km/h respectively. When they meet, the first car has travelled 60 km more than the second. What is the distance between P and Q?",
          "options": [
            "480 km",
            "600 km",
            "450 km",
            "540 km"
          ],
          "answer": 3,
          "explanation": "Extra distance per hour = 50 − 40 = 10 km ⇒ they meet after 60/10 = 6 h.<br>PQ = (50 + 40) × 6 = 540 km."
        }
      ]
    },
    {
      "id": "algebra",
      "name": "Algebra",
      "notes": [
        {
          "heading": "Standard Identities",
          "points": [
            "(a ± b)² = a² ± 2ab + b²; a² − b² = (a + b)(a − b); (a + b)² − (a − b)² = 4ab.",
            "(a + b)³ = a³ + b³ + 3ab(a + b); (a − b)³ = a³ − b³ − 3ab(a − b).",
            "a³ + b³ = (a + b)(a² − ab + b²); a³ − b³ = (a − b)(a² + ab + b²).",
            "(a + b + c)² = a² + b² + c² + 2(ab + bc + ca).",
            "a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca).",
            "If a + b + c = 0 → a³ + b³ + c³ = 3abc."
          ]
        },
        {
          "heading": "x + 1/x Type",
          "points": [
            "If x + 1/x = k: x² + 1/x² = k² − 2; x³ + 1/x³ = k³ − 3k.",
            "If x − 1/x = k: x² + 1/x² = k² + 2; x³ − 1/x³ = k³ + 3k.",
            "x⁴ + 1/x⁴ = (x² + 1/x²)² − 2.",
            "x + 1/x = 2 → x = 1; x + 1/x = −2 → x = −1.",
            "x + 1/x = √3 → x³ + 1/x³ = 0 → x<sup>6</sup> = −1.",
            "x + 1/x = 1 → x³ = −1."
          ]
        },
        {
          "heading": "Useful Tricks",
          "points": [
            "Sum of squares = 0 (e.g. (a − p)² + (b − q)² = 0) ⇒ each bracket is 0.",
            "Completing squares: a² + b² + c² − 2a + 4b + 6c + 14 = (a − 1)² + (b + 2)² + (c + 3)².",
            "Put convenient values (like a = b = c or x = 1) to check options quickly, if the condition allows.",
            "Linear pair a<sub>1</sub>x + b<sub>1</sub>y = c<sub>1</sub>, a<sub>2</sub>x + b<sub>2</sub>y = c<sub>2</sub>: unique solution if a<sub>1</sub>/a<sub>2</sub> ≠ b<sub>1</sub>/b<sub>2</sub>; no solution if a<sub>1</sub>/a<sub>2</sub> = b<sub>1</sub>/b<sub>2</sub> ≠ c<sub>1</sub>/c<sub>2</sub>."
          ]
        }
      ],
      "flashcards": [
        { "front": "x + 1/x = k ⇒ x³ + 1/x³ = ?", "back": "k³ − 3k" },
        { "front": "x − 1/x = k ⇒ x³ − 1/x³ = ?", "back": "k³ + 3k" },
        { "front": "x − 1/x = k ⇒ x² + 1/x² = ?", "back": "k² + 2" },
        { "front": "If a + b + c = 0, a³ + b³ + c³ = ?", "back": "3abc" },
        { "front": "a³ + b³ + c³ − 3abc = ?", "back": "(a + b + c)(a² + b² + c² − ab − bc − ca)" },
        { "front": "If x + 1/x = √3, x<sup>6</sup> = ?", "back": "−1" },
        { "front": "(a + b)² − (a − b)² = ?", "back": "4ab" }
      ],
      "questions": [
        {
          "q": "If x + 1/x = 5, what is the value of x² + 1/x²?",
          "options": ["25", "23", "27", "21"],
          "answer": 1,
          "explanation": "x² + 1/x² = (x + 1/x)² − 2 = 25 − 2 = <b>23</b>."
        },
        {
          "q": "If x + 1/x = 4, what is the value of x³ + 1/x³?",
          "options": ["52", "64", "48", "76"],
          "answer": 0,
          "explanation": "x³ + 1/x³ = k³ − 3k = 4³ − 3 × 4 = 64 − 12 = <b>52</b>."
        },
        {
          "q": "If a + b + c = 0, then the value of a²/(bc) + b²/(ca) + c²/(ab) is:",
          "options": ["0", "1", "3", "−3"],
          "answer": 2,
          "explanation": "a²/(bc) + b²/(ca) + c²/(ab) = (a³ + b³ + c³)/(abc).<br>Since a + b + c = 0, a³ + b³ + c³ = 3abc → value = 3abc/abc = <b>3</b>."
        },
        {
          "q": "If x − 1/x = 3, what is the value of x⁴ + 1/x⁴?",
          "options": ["121", "123", "117", "119"],
          "answer": 3,
          "explanation": "x² + 1/x² = (x − 1/x)² + 2 = 9 + 2 = 11.<br>x⁴ + 1/x⁴ = (x² + 1/x²)² − 2 = 121 − 2 = <b>119</b>."
        },
        {
          "q": "If a + b = 10 and ab = 21, what is the value of a³ + b³?",
          "options": ["390", "370", "310", "430"],
          "answer": 1,
          "explanation": "a³ + b³ = (a + b)³ − 3ab(a + b) = 1000 − 3 × 21 × 10 = 1000 − 630 = <b>370</b>.<br>(Check: a = 7, b = 3 → 343 + 27 = 370.)"
        },
        {
          "q": "If a² + b² + c² + 14 = 2(a − 2b − 3c), what is the value of a + b + c?",
          "options": ["−4", "4", "2", "−2"],
          "answer": 0,
          "explanation": "a² + b² + c² − 2a + 4b + 6c + 14 = 0 → (a − 1)² + (b + 2)² + (c + 3)² = 0.<br>Each square is zero: a = 1, b = −2, c = −3.<br>a + b + c = 1 − 2 − 3 = <b>−4</b>."
        },
        {
          "q": "If a − b = 5 and ab = 24, what is the value of a³ − b³?",
          "options": [
            "485",
            "365",
            "−235",
            "605"
          ],
          "answer": 0,
          "explanation": "a³ − b³ = (a − b)³ + 3ab(a − b) = 125 + 3 × 24 × 5 = 125 + 360 = 485."
        },
        {
          "q": "If x + y + z = 12 and xy + yz + zx = 47, what is the value of x² + y² + z²?",
          "options": [
            "97",
            "50",
            "44",
            "56"
          ],
          "answer": 1,
          "explanation": "x² + y² + z² = (x + y + z)² − 2(xy + yz + zx) = 144 − 94 = 50."
        },
        {
          "q": "If x = 3 + 2√2, what is the value of √x + 1/√x?",
          "options": [
            "6",
            "2",
            "2√2",
            "√6"
          ],
          "answer": 2,
          "explanation": "1/x = 3 − 2√2, so x + 1/x = 6.<br>(√x + 1/√x)² = x + 1/x + 2 = 8 ⇒ √x + 1/√x = 2√2."
        },
        {
          "q": "What is the value of a³ + b³ + c³ − 3abc when a = 97, b = 98 and c = 99?",
          "options": [
            "294",
            "0",
            "588",
            "882"
          ],
          "answer": 3,
          "explanation": "a³ + b³ + c³ − 3abc = ½(a + b + c)[(a − b)² + (b − c)² + (c − a)²] = ½ × 294 × (1 + 1 + 4) = 882."
        },
        {
          "q": "If x + 1/x = √3, what is the value of x¹⁸ + x¹² + x⁶ + 1?",
          "options": [
            "0",
            "1",
            "2",
            "4"
          ],
          "answer": 0,
          "explanation": "x + 1/x = √3 ⇒ x³ + 1/x³ = 3√3 − 3√3 = 0 ⇒ x⁶ = −1.<br>Value = (−1)³ + (−1)² + (−1) + 1 = −1 + 1 − 1 + 1 = 0."
        },
        {
          "q": "For what value of k will the pair of equations 3x + ky = 7 and 6x + 10y = 5 have no solution?",
          "options": [
            "10",
            "5",
            "2",
            "6"
          ],
          "answer": 1,
          "explanation": "No solution when 3/6 = k/10 ≠ 7/5 ⇒ k = 5 (and 1/2 ≠ 7/5, so the lines are parallel)."
        },
        {
          "q": "If 2x + 3y = 13 and xy = 6, what is the value of 8x³ + 27y³?",
          "options": [
            "1404",
            "2197",
            "793",
            "865"
          ],
          "answer": 2,
          "explanation": "8x³ + 27y³ = (2x + 3y)³ − 3(2x)(3y)(2x + 3y) = 2197 − 18 × 6 × 13 = 2197 − 1404 = 793."
        },
        {
          "q": "What is the simplified value of [(a² − b²)³ + (b² − c²)³ + (c² − a²)³] ÷ [(a − b)³ + (b − c)³ + (c − a)³]?",
          "options": [
            "(a − b)(b − c)(c − a)",
            "3(a + b)(b + c)(c + a)",
            "1",
            "(a + b)(b + c)(c + a)"
          ],
          "answer": 3,
          "explanation": "Both sums have terms adding to 0, so each equals 3 × (product of terms).<br>Ratio = 3(a² − b²)(b² − c²)(c² − a²) / 3(a − b)(b − c)(c − a) = (a + b)(b + c)(c + a)."
        }
      ]
    },
    {
      "id": "geometry",
      "name": "Geometry",
      "notes": [
        {
          "heading": "Triangles",
          "points": [
            "Angle sum = 180°; exterior angle = sum of the two interior opposite angles.",
            "Sum of any two sides > third side; difference of any two sides < third side.",
            "Pythagorean triplets: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (9,40,41), (20,21,29).",
            "Angle bisector theorem: BD/DC = AB/AC.",
            "Apollonius (median AD): AB² + AC² = 2(AD² + BD²).",
            "Similar triangles: ratio of areas = ratio of squares of corresponding sides (also of medians, altitudes).",
            "Equilateral side a: height = (√3/2)a, area = (√3/4)a², inradius = a/(2√3), circumradius = a/√3."
          ]
        },
        {
          "heading": "Centres of a Triangle",
          "points": [
            "<b>Centroid</b> (medians): divides each median 2 : 1 from the vertex; medians divide triangle into 6 equal areas.",
            "<b>Incentre</b> (angle bisectors): ∠BIC = 90° + A/2.",
            "<b>Excentre</b>: ∠BI<sub>1</sub>C = 90° − A/2.",
            "<b>Orthocentre</b> (altitudes): ∠BHC = 180° − A.",
            "<b>Circumcentre</b> (perpendicular bisectors): ∠BOC = 2A (acute triangle).",
            "Right triangle: circumradius = hypotenuse/2; inradius r = (a + b − c)/2; orthocentre lies at the right-angle vertex.",
            "Euler: OI² = R² − 2Rr. In an equilateral triangle all centres coincide."
          ]
        },
        {
          "heading": "Circles",
          "points": [
            "Angle at centre = 2 × angle at circumference on the same arc; angle in a semicircle = 90°.",
            "Cyclic quadrilateral: opposite angles sum to 180°; exterior angle = interior opposite angle.",
            "Tangent ⟂ radius; length of tangent from external point = √(d² − r²); two tangents from a point are equal.",
            "Intersecting chords: PA × PB = PC × PD; tangent–secant: PT² = PA × PB.",
            "Direct common tangent = √(d² − (r<sub>1</sub> − r<sub>2</sub>)²); transverse common tangent = √(d² − (r<sub>1</sub> + r<sub>2</sub>)²).",
            "Alternate segment theorem: angle between tangent and chord = angle in the alternate segment."
          ]
        },
        {
          "heading": "Polygons",
          "points": [
            "Sum of interior angles = (n − 2) × 180°; each exterior angle (regular) = 360°/n.",
            "Each interior angle (regular) = 180° − 360°/n; number of diagonals = n(n − 3)/2.",
            "Sum of exterior angles of any convex polygon = 360°."
          ]
        }
      ],
      "flashcards": [
        { "front": "∠BIC where I is the incentre?", "back": "90° + A/2" },
        { "front": "∠BHC where H is the orthocentre?", "back": "180° − A" },
        { "front": "∠BOC where O is the circumcentre?", "back": "2A" },
        { "front": "Centroid divides a median in the ratio?", "back": "2 : 1 from the vertex" },
        { "front": "Length of direct common tangent?", "back": "√(d² − (r<sub>1</sub> − r<sub>2</sub>)²)" },
        { "front": "Number of diagonals of an n-sided polygon?", "back": "n(n − 3)/2" },
        { "front": "Inradius of a right triangle with legs a, b and hypotenuse c?", "back": "(a + b − c)/2" },
        { "front": "Apollonius theorem?", "back": "AB² + AC² = 2(AD² + BD²), AD = median" }
      ],
      "questions": [
        {
          "q": "In ΔABC, I is the incentre and ∠A = 70°. What is the measure of ∠BIC?",
          "options": ["125°", "135°", "110°", "145°"],
          "answer": 0,
          "explanation": "∠BIC = 90° + A/2 = 90° + 35° = <b>125°</b>."
        },
        {
          "q": "Each interior angle of a regular polygon is 156°. How many sides does the polygon have?",
          "options": ["12", "15", "18", "16"],
          "answer": 1,
          "explanation": "Each exterior angle = 180° − 156° = 24°.<br>Number of sides = 360°/24° = <b>15</b>."
        },
        {
          "q": "Two circles of radii 8 cm and 3 cm have their centres 13 cm apart. What is the length of their direct common tangent?",
          "options": ["4√3 cm", "10 cm", "12 cm", "√153 cm"],
          "answer": 2,
          "explanation": "Direct common tangent = √(d² − (r<sub>1</sub> − r<sub>2</sub>)²) = √(13² − 5²) = √(169 − 25) = √144 = <b>12 cm</b>."
        },
        {
          "q": "In ΔABC, D and E are points on AB and AC such that DE ∥ BC and AD : DB = 2 : 3. What is the ratio of the area of ΔADE to the area of trapezium DECB?",
          "options": ["4 : 25", "2 : 3", "4 : 9", "4 : 21"],
          "answer": 3,
          "explanation": "ΔADE ~ ΔABC with AD/AB = 2/5.<br>Area ADE : Area ABC = 4 : 25.<br>Area DECB = 25 − 4 = 21 → ADE : DECB = <b>4 : 21</b>."
        },
        {
          "q": "ABCD is a cyclic quadrilateral in which ∠A = (2x + 10)° and ∠C = (3x − 5)°. What is the measure of ∠C?",
          "options": ["80°", "100°", "95°", "105°"],
          "answer": 1,
          "explanation": "Opposite angles of a cyclic quadrilateral sum to 180°: (2x + 10) + (3x − 5) = 180 → 5x = 175 → x = 35.<br>∠C = 3(35) − 5 = <b>100°</b> (and ∠A = 80°)."
        },
        {
          "q": "In a right-angled triangle with sides 9 cm, 12 cm and 15 cm, what is the distance between its incentre and circumcentre?",
          "options": ["3√5/2 cm", "√5 cm", "5/2 cm", "3√2 cm"],
          "answer": 0,
          "explanation": "Inradius r = (9 + 12 − 15)/2 = 3; circumradius R = 15/2 = 7.5.<br>Euler: OI² = R² − 2Rr = 56.25 − 45 = 11.25 = 45/4.<br>OI = √45/2 = <b>3√5/2 cm</b>.<br>(Coordinates check: incentre (3, 3), circumcentre (6, 4.5) → √(9 + 2.25).)"
        },
        {
          "q": "In an acute-angled triangle ABC, H is the orthocentre and ∠A = 65°. What is the measure of ∠BHC?",
          "options": [
            "115°",
            "130°",
            "65°",
            "122.5°"
          ],
          "answer": 0,
          "explanation": "For the orthocentre, ∠BHC = 180° − ∠A = 180° − 65° = 115°."
        },
        {
          "q": "In ΔABC, AB = 10 cm, AC = 14 cm and BC = 16 cm. What is the length of the median AD drawn to side BC?",
          "options": [
            "2√19 cm",
            "2√21 cm",
            "4√5 cm",
            "3√10 cm"
          ],
          "answer": 1,
          "explanation": "Apollonius: AB² + AC² = 2(AD² + BD²) ⇒ 100 + 196 = 2(AD² + 64) ⇒ AD² = 84.<br>AD = √84 = 2√21 cm."
        },
        {
          "q": "From an external point P, a tangent PT of length 12 cm is drawn to a circle. A secant through P cuts the circle at A and B (A between P and B) with PA = 8 cm. What is the length of chord AB?",
          "options": [
            "18 cm",
            "8 cm",
            "10 cm",
            "14 cm"
          ],
          "answer": 2,
          "explanation": "PT² = PA × PB ⇒ 144 = 8 × PB ⇒ PB = 18 cm.<br>AB = PB − PA = 18 − 8 = 10 cm."
        },
        {
          "q": "In a circle with centre O, chord AB subtends an angle of 110° at the centre. C is a point on the major arc AB. What is the measure of ∠ACB?",
          "options": [
            "125°",
            "110°",
            "70°",
            "55°"
          ],
          "answer": 3,
          "explanation": "Angle at the circumference = ½ × angle at the centre on the same arc = ½ × 110° = 55°."
        },
        {
          "q": "Each exterior angle of a regular polygon is 24°. How many diagonals does the polygon have?",
          "options": [
            "90",
            "105",
            "75",
            "120"
          ],
          "answer": 0,
          "explanation": "n = 360°/24° = 15 sides.<br>Diagonals = n(n − 3)/2 = 15 × 12/2 = 90."
        },
        {
          "q": "In ΔABC, AB = 6 cm, AC = 9 cm and BC = 10 cm. The bisector of ∠A meets BC at D. What is the length of BD?",
          "options": [
            "6 cm",
            "4 cm",
            "5 cm",
            "3.6 cm"
          ],
          "answer": 1,
          "explanation": "BD/DC = AB/AC = 6/9 = 2/3 ⇒ BD = (2/5) × 10 = 4 cm."
        },
        {
          "q": "Two parallel chords of lengths 16 cm and 12 cm lie on opposite sides of the centre of a circle of radius 10 cm. What is the distance between the chords?",
          "options": [
            "2 cm",
            "10 cm",
            "14 cm",
            "12 cm"
          ],
          "answer": 2,
          "explanation": "Distance of 16 cm chord from centre = √(100 − 64) = 6 cm; of 12 cm chord = √(100 − 36) = 8 cm.<br>Opposite sides ⇒ 6 + 8 = 14 cm."
        },
        {
          "q": "Two circles of radii 5 cm and 3 cm have their centres 17 cm apart. What is the length of their transverse common tangent?",
          "options": [
            "√285 cm",
            "16 cm",
            "8 cm",
            "15 cm"
          ],
          "answer": 3,
          "explanation": "Transverse common tangent = √(d² − (r₁ + r₂)²) = √(289 − 64) = √225 = 15 cm."
        }
      ]
    },
    {
      "id": "mensuration",
      "name": "Mensuration",
      "notes": [
        {
          "heading": "2D Figures",
          "points": [
            "Triangle: ½ × base × height; Heron: √[s(s − a)(s − b)(s − c)], s = (a + b + c)/2.",
            "Equilateral triangle: (√3/4)a²; Rectangle: lb, diagonal √(l² + b²); Square: a², diagonal a√2.",
            "Rhombus: ½ d<sub>1</sub>d<sub>2</sub>; side² = (d<sub>1</sub>/2)² + (d<sub>2</sub>/2)². Parallelogram: base × height. Trapezium: ½(a + b)h.",
            "Circle: area πr², circumference 2πr. Semicircle perimeter = πr + 2r.",
            "Sector: area = (θ/360) × πr²; arc length = (θ/360) × 2πr.",
            "Regular hexagon of side a: area = (3√3/2)a².",
            "Each side changed by x% → area changes by (2x + x²/100)%; volume (3D) changes by (3x + 3x²/100 + x³/10000)%."
          ]
        },
        {
          "heading": "3D Solids",
          "points": [
            "Cube: TSA 6a², volume a³, diagonal a√3. Cuboid: TSA 2(lb + bh + hl), volume lbh, diagonal √(l² + b² + h²).",
            "Cylinder: CSA 2πrh, TSA 2πr(r + h), volume πr²h.",
            "Cone: slant l = √(r² + h²), CSA πrl, TSA πr(l + r), volume ⅓πr²h.",
            "Sphere: SA 4πr², volume (4/3)πr³. Hemisphere: CSA 2πr², TSA 3πr², volume (2/3)πr³.",
            "Frustum: volume = (πh/3)(R² + Rr + r²); CSA = π(R + r)l, l = √(h² + (R − r)²).",
            "Prism volume = base area × height; pyramid volume = ⅓ × base area × height."
          ]
        },
        {
          "heading": "Exam Tricks",
          "points": [
            "Melting & recasting: total volume stays the same (surface area changes).",
            "Number of small solids = volume of big solid / volume of one small solid.",
            "Use π = 22/7 when radius is a multiple of 7; answers often end up as clean integers."
          ]
        }
      ],
      "flashcards": [
        { "front": "Volume of a cone?", "back": "⅓πr²h" },
        { "front": "TSA of a hemisphere?", "back": "3πr²" },
        { "front": "Volume of a frustum?", "back": "(πh/3)(R² + Rr + r²)" },
        { "front": "Diagonal of a cube of side a?", "back": "a√3" },
        { "front": "Area of a rhombus?", "back": "½ × d<sub>1</sub> × d<sub>2</sub>" },
        { "front": "Radius increases by x%: % change in circle area?", "back": "2x + x²/100 %" },
        { "front": "Heron's formula?", "back": "√[s(s − a)(s − b)(s − c)], s = semi-perimeter" },
        { "front": "Area of a sector of angle θ?", "back": "(θ/360) × πr²" }
      ],
      "questions": [
        {
          "q": "What is the area of a triangle whose sides are 13 cm, 14 cm and 15 cm?",
          "options": ["84 cm²", "91 cm²", "72 cm²", "96 cm²"],
          "answer": 0,
          "explanation": "s = (13 + 14 + 15)/2 = 21.<br>Area = √[21 × 8 × 7 × 6] = √7056 = <b>84 cm²</b>."
        },
        {
          "q": "If the radius of a circle is increased by 20%, by what percentage does its area increase?",
          "options": ["40%", "44%", "20%", "21%"],
          "answer": 1,
          "explanation": "Area ∝ r². % increase = 2x + x²/100 = 40 + 4 = <b>44%</b>.<br>(1.2² = 1.44.)"
        },
        {
          "q": "What is the volume of a right circular cone with base radius 7 cm and height 24 cm? (Take π = 22/7)",
          "options": ["3696 cm³", "1540 cm³", "1232 cm³", "1078 cm³"],
          "answer": 2,
          "explanation": "V = ⅓πr²h = ⅓ × (22/7) × 49 × 24 = 22 × 7 × 8 = <b>1232 cm³</b>."
        },
        {
          "q": "A metallic sphere of radius 6 cm is melted and drawn into a cylindrical wire of radius 0.2 cm. What is the length of the wire?",
          "options": ["36 m", "7.2 m", "144 m", "72 m"],
          "answer": 3,
          "explanation": "Volume of sphere = (4/3)π(6)³ = 288π cm³.<br>Volume of wire = π(0.2)²L = 0.04πL.<br>0.04L = 288 → L = 7200 cm = <b>72 m</b>."
        },
        {
          "q": "The diagonal of a cube is 6√3 cm. What is its total surface area?",
          "options": ["144 cm²", "216 cm²", "108 cm²", "256 cm²"],
          "answer": 1,
          "explanation": "Diagonal = a√3 = 6√3 → a = 6 cm.<br>TSA = 6a² = 6 × 36 = <b>216 cm²</b>."
        },
        {
          "q": "A hemispherical bowl of internal radius 9 cm is full of liquid. The liquid is filled into cylindrical bottles of diameter 3 cm and height 4 cm. How many bottles are needed to empty the bowl?",
          "options": ["48", "60", "54", "72"],
          "answer": 2,
          "explanation": "Bowl volume = (2/3)π(9)³ = (2/3)π × 729 = 486π cm³.<br>Bottle volume = π(1.5)² × 4 = 9π cm³.<br>Number of bottles = 486π/9π = <b>54</b>."
        },
        {
          "q": "The diagonals of a rhombus are 24 cm and 10 cm. What is the perimeter of the rhombus?",
          "options": [
            "52 cm",
            "60 cm",
            "68 cm",
            "48 cm"
          ],
          "answer": 0,
          "explanation": "Side = √(12² + 5²) = 13 cm (diagonals bisect at right angles).<br>Perimeter = 4 × 13 = 52 cm."
        },
        {
          "q": "What is the area of a sector of a circle of radius 21 cm with central angle 120°? (Take π = 22/7)",
          "options": [
            "231 cm²",
            "462 cm²",
            "693 cm²",
            "154 cm²"
          ],
          "answer": 1,
          "explanation": "Area = (120/360) × (22/7) × 21 × 21 = (1/3) × 1386 = 462 cm²."
        },
        {
          "q": "The curved surface area of a right circular cylinder of base radius 7 cm is 1320 cm². What is its volume? (Take π = 22/7)",
          "options": [
            "4400 cm³",
            "9240 cm³",
            "4620 cm³",
            "3960 cm³"
          ],
          "answer": 2,
          "explanation": "2πrh = 1320 ⇒ 2 × (22/7) × 7 × h = 1320 ⇒ h = 30 cm.<br>V = πr²h = (22/7) × 49 × 30 = 4620 cm³."
        },
        {
          "q": "A frustum of a right circular cone has radii of its two ends 14 cm and 7 cm and height 6 cm. What is its volume? (Take π = 22/7)",
          "options": [
            "2256 cm³",
            "1848 cm³",
            "2464 cm³",
            "2156 cm³"
          ],
          "answer": 3,
          "explanation": "V = (πh/3)(R² + Rr + r²) = (22/7) × (6/3) × (196 + 98 + 49) = (44/7) × 343 = 2156 cm³."
        },
        {
          "q": "A right circular cone has base radius 5 cm and height 12 cm. What is its total surface area?",
          "options": [
            "90π cm²",
            "65π cm²",
            "100π cm²",
            "115π cm²"
          ],
          "answer": 0,
          "explanation": "Slant height l = √(25 + 144) = 13 cm.<br>TSA = πr(l + r) = π × 5 × 18 = 90π cm²."
        },
        {
          "q": "What is the area of a regular hexagon of side 6 cm?",
          "options": [
            "36√3 cm²",
            "54√3 cm²",
            "72√3 cm²",
            "108√3 cm²"
          ],
          "answer": 1,
          "explanation": "Area = (3√3/2)a² = (3√3/2) × 36 = 54√3 cm² (six equilateral triangles of side 6 cm)."
        },
        {
          "q": "If each edge of a cube is increased by 20%, by what percentage does its volume increase?",
          "options": [
            "60%",
            "44%",
            "72.8%",
            "69.6%"
          ],
          "answer": 2,
          "explanation": "New volume = (1.2)³ = 1.728 times the original.<br>Increase = 72.8%."
        },
        {
          "q": "The volumes of two spheres are in the ratio 8 : 27. What is the ratio of their surface areas?",
          "options": [
            "2 : 3",
            "8 : 27",
            "16 : 81",
            "4 : 9"
          ],
          "answer": 3,
          "explanation": "Volume ratio 8 : 27 ⇒ radius ratio = ∛8 : ∛27 = 2 : 3.<br>Surface area ratio = 2² : 3² = 4 : 9."
        }
      ]
    },
    {
      "id": "trigonometry",
      "name": "Trigonometry",
      "notes": [
        {
          "heading": "Standard Values",
          "points": [
            "sin: 0° = 0, 30° = 1/2, 45° = 1/√2, 60° = √3/2, 90° = 1.",
            "cos: 0° = 1, 30° = √3/2, 45° = 1/√2, 60° = 1/2, 90° = 0.",
            "tan: 0° = 0, 30° = 1/√3, 45° = 1, 60° = √3, 90° = not defined.",
            "sin 15° = (√3 − 1)/(2√2); cos 15° = (√3 + 1)/(2√2); tan 15° = 2 − √3; tan 75° = 2 + √3."
          ]
        },
        {
          "heading": "Identities",
          "points": [
            "sin²θ + cos²θ = 1; sec²θ − tan²θ = 1; cosec²θ − cot²θ = 1.",
            "If secθ + tanθ = k → secθ − tanθ = 1/k. Similarly cosecθ + cotθ = k → cosecθ − cotθ = 1/k.",
            "Complementary: sin(90° − θ) = cosθ, tan(90° − θ) = cotθ, sec(90° − θ) = cosecθ.",
            "If A + B = 90°: tanA·tanB = 1, sin²A + sin²B = 1, sinA = cosB.",
            "tan1° × tan2° × ... × tan89° = 1 (pairs tanθ·tan(90° − θ) = 1, tan45° = 1).",
            "sin2θ = 2sinθcosθ; cos2θ = cos²θ − sin²θ = 1 − 2sin²θ; sin3θ = 3sinθ − 4sin³θ."
          ]
        },
        {
          "heading": "Max/Min Values",
          "points": [
            "Max of a sinθ + b cosθ = √(a² + b²); min = −√(a² + b²).",
            "a sin²θ + b cos²θ lies between a and b.",
            "a²sec²θ + b²cosec²θ has minimum (a + b)²; a tan²θ + b cot²θ has minimum 2√(ab)."
          ]
        },
        {
          "heading": "Heights & Distances",
          "points": [
            "tan(angle of elevation) = height / horizontal distance.",
            "Angle of depression from a top = angle of elevation from the ground point (alternate angles).",
            "30°–60°–90° triangle sides = 1 : √3 : 2; 45°–45°–90° sides = 1 : 1 : √2.",
            "Observer moves d towards tower, elevation changes 30° → 60°: height = (√3/2)d; nearer distance = d/2."
          ]
        }
      ],
      "flashcards": [
        { "front": "sin²θ + cos²θ = ? and sec²θ − tan²θ = ?", "back": "1 and 1" },
        { "front": "secθ + tanθ = k ⇒ secθ − tanθ = ?", "back": "1/k" },
        { "front": "Maximum of a sinθ + b cosθ?", "back": "√(a² + b²)" },
        { "front": "tan 15° and tan 75°?", "back": "2 − √3 and 2 + √3" },
        { "front": "If A + B = 90°, tanA·tanB = ?", "back": "1" },
        { "front": "Side ratio of a 30°–60°–90° triangle?", "back": "1 : √3 : 2 (opposite 30°, 60°, 90°)" },
        { "front": "Elevation 30° → 60° after moving d towards tower: height?", "back": "(√3/2)d" }
      ],
      "questions": [
        {
          "q": "What is the value of sin²30° + cos²60° + tan²45°?",
          "options": ["3/2", "1", "2", "5/4"],
          "answer": 0,
          "explanation": "sin30° = 1/2 → 1/4; cos60° = 1/2 → 1/4; tan45° = 1 → 1.<br>Sum = 1/4 + 1/4 + 1 = <b>3/2</b>."
        },
        {
          "q": "If secθ + tanθ = 3, what is the value of secθ?",
          "options": ["4/3", "5/3", "3/5", "5/4"],
          "answer": 1,
          "explanation": "sec²θ − tan²θ = 1 → secθ − tanθ = 1/3.<br>Adding: 2secθ = 3 + 1/3 = 10/3 → secθ = <b>5/3</b>."
        },
        {
          "q": "What is the value of tan1° × tan2° × tan3° × ... × tan89°?",
          "options": ["0", "√3", "1", "Not defined"],
          "answer": 2,
          "explanation": "Pair terms: tanθ × tan(90° − θ) = tanθ × cotθ = 1 (tan1°·tan89°, tan2°·tan88°, ...).<br>The middle term tan45° = 1. Product = <b>1</b>."
        },
        {
          "q": "What is the maximum value of 5 sinθ + 12 cosθ?",
          "options": ["17", "12", "7", "13"],
          "answer": 3,
          "explanation": "Maximum of a sinθ + b cosθ = √(a² + b²) = √(25 + 144) = √169 = <b>13</b>."
        },
        {
          "q": "From the top of a 60 m high tower, the angle of depression of a car on the ground is 30°. How far is the car from the foot of the tower?",
          "options": ["60 m", "60√3 m", "20√3 m", "120 m"],
          "answer": 1,
          "explanation": "Angle of elevation of tower top from the car = 30°.<br>tan30° = 60/d → 1/√3 = 60/d → d = <b>60√3 m</b> (≈ 103.9 m)."
        },
        {
          "q": "The angle of elevation of the top of a tower from a point on the ground is 30°. On walking 40 m towards the tower, the angle of elevation becomes 60°. What is the height of the tower?",
          "options": ["40√3 m", "20 m", "40 m", "20√3 m"],
          "answer": 3,
          "explanation": "Let height = h and distance from the nearer point = x.<br>tan60° = h/x → h = x√3. tan30° = h/(x + 40) → h = (x + 40)/√3.<br>x√3 = (x + 40)/√3 → 3x = x + 40 → x = 20.<br>h = 20√3 m (≈ 34.64 m). Shortcut: (√3/2) × 40 = <b>20√3 m</b>."
        },
        {
          "q": "If tanθ = 3/4 (θ acute), what is the value of (sinθ + cosθ)/(sinθ − cosθ)?",
          "options": [
            "−7",
            "7",
            "1/7",
            "−1/7"
          ],
          "answer": 0,
          "explanation": "Divide numerator and denominator by cosθ: (tanθ + 1)/(tanθ − 1) = (7/4)/(−1/4) = −7."
        },
        {
          "q": "If cosecθ + cotθ = 5, what is the value of cosθ?",
          "options": [
            "5/13",
            "12/13",
            "13/12",
            "12/5"
          ],
          "answer": 1,
          "explanation": "cosecθ − cotθ = 1/(cosecθ + cotθ) = 1/5. Adding: 2cosecθ = 26/5 ⇒ cosecθ = 13/5; subtracting: cotθ = 12/5.<br>cosθ = cotθ/cosecθ = (12/5)/(13/5) = 12/13."
        },
        {
          "q": "What is the value of sin²5° + sin²10° + sin²15° + ... + sin²85°?",
          "options": [
            "9",
            "8",
            "17/2",
            "19/2"
          ],
          "answer": 2,
          "explanation": "17 terms. Pair sin²θ + sin²(90° − θ) = sin²θ + cos²θ = 1: 8 pairs give 8, plus sin²45° = 1/2.<br>Total = 8½ = 17/2."
        },
        {
          "q": "What is the minimum value of 4tan²θ + 9cot²θ (0° < θ < 90°)?",
          "options": [
            "13",
            "6",
            "36",
            "12"
          ],
          "answer": 3,
          "explanation": "By AM ≥ GM: 4tan²θ + 9cot²θ ≥ 2√(4tan²θ × 9cot²θ) = 2√36 = 12."
        },
        {
          "q": "If sinθ = 3/5 and θ is acute, what is the value of sin2θ?",
          "options": [
            "24/25",
            "6/5",
            "7/25",
            "12/25"
          ],
          "answer": 0,
          "explanation": "cosθ = 4/5. sin2θ = 2sinθcosθ = 2 × (3/5) × (4/5) = 24/25."
        },
        {
          "q": "The length of the shadow of a vertical pole on level ground is √3 times its height. What is the angle of elevation of the Sun?",
          "options": [
            "60°",
            "30°",
            "45°",
            "75°"
          ],
          "answer": 1,
          "explanation": "tan(elevation) = height/shadow = 1/√3 ⇒ angle = 30°."
        },
        {
          "q": "A ladder leaning against a vertical wall makes an angle of 60° with the level ground. If the foot of the ladder is 4.5 m away from the wall, what is the length of the ladder?",
          "options": [
            "4.5√3 m",
            "3√3 m",
            "9 m",
            "18 m"
          ],
          "answer": 2,
          "explanation": "cos60° = 4.5/length ⇒ length = 4.5/(1/2) = 9 m."
        },
        {
          "q": "The angles of elevation of the top of a tower from two points on level ground, at distances of 4 m and 9 m from the base of the tower and on the same straight line with it, are complementary. What is the height of the tower?",
          "options": [
            "6.5 m",
            "5 m",
            "13 m",
            "6 m"
          ],
          "answer": 3,
          "explanation": "tanθ = h/4 and tan(90° − θ) = cotθ = h/9. Multiplying: 1 = h²/36 ⇒ h = 6 m (h = √(4 × 9))."
        }
      ]
    },
    {
      "id": "data-interpretation",
      "name": "Data Interpretation & Statistics",
      "notes": [
        {
          "heading": "Mean, Median, Mode",
          "points": [
            "Mean = Σx/n; grouped/weighted mean = Σfx/Σf.",
            "Median: arrange in order; n odd → ((n + 1)/2)th term; n even → average of (n/2)th and (n/2 + 1)th terms.",
            "Mode = most frequent value (a data set can be bimodal).",
            "Empirical relation: Mode = 3 Median − 2 Mean.",
            "Range = maximum − minimum. Combined mean = (n<sub>1</sub>x̄<sub>1</sub> + n<sub>2</sub>x̄<sub>2</sub>)/(n<sub>1</sub> + n<sub>2</sub>)."
          ]
        },
        {
          "heading": "Pie Charts",
          "points": [
            "Central angle = (component/total) × 360°.",
            "Percentage to degrees: × 3.6 (e.g. 25% = 90°); degrees to percentage: ÷ 3.6.",
            "Value of a sector = (angle/360) × total."
          ]
        },
        {
          "heading": "Table & Bar-Graph Tricks",
          "points": [
            "% increase = (new − old)/old × 100 — the base is always the <b>earlier</b> value.",
            "Compare ratios by cross-multiplication instead of full division.",
            "Approximate numbers to the nearest convenient value when options are far apart.",
            "Average over years = total / number of years; read units (thousands, lakhs, crores) carefully."
          ]
        }
      ],
      "flashcards": [
        { "front": "Empirical relation between mean, median and mode?", "back": "Mode = 3 Median − 2 Mean" },
        { "front": "Median when n is even?", "back": "Average of (n/2)th and (n/2 + 1)th observations" },
        { "front": "Convert a percentage to pie-chart degrees?", "back": "Multiply by 3.6" },
        { "front": "Central angle of a sector?", "back": "(component/total) × 360°" },
        { "front": "Combined mean of two groups?", "back": "(n<sub>1</sub>x̄<sub>1</sub> + n<sub>2</sub>x̄<sub>2</sub>)/(n<sub>1</sub> + n<sub>2</sub>)" },
        { "front": "Range of data?", "back": "Maximum value − Minimum value" }
      ],
      "questions": [
        {
          "q": "What is the median of the data: 12, 7, 19, 4, 15, 9, 22, 10?",
          "options": ["10", "11", "12", "12.5"],
          "answer": 1,
          "explanation": "Arrange: 4, 7, 9, 10, 12, 15, 19, 22 (n = 8, even).<br>Median = average of 4th and 5th terms = (10 + 12)/2 = <b>11</b>."
        },
        {
          "q": "What is the mode of the data: 3, 5, 7, 5, 8, 3, 5, 9, 7, 5, 3?",
          "options": ["3", "7", "5", "4"],
          "answer": 2,
          "explanation": "Frequencies: 3 → 3 times, 5 → 4 times, 7 → 2 times, 8 → 1, 9 → 1.<br>Most frequent value = <b>5</b>."
        },
        {
          "q": "For a moderately skewed distribution, the mean is 24 and the median is 26. Using the empirical relation, what is the mode?",
          "options": ["30", "28", "32", "25"],
          "answer": 0,
          "explanation": "Mode = 3 Median − 2 Mean = 3 × 26 − 2 × 24 = 78 − 48 = <b>30</b>."
        },
        {
          "q": "A family's total monthly expenditure is ₹48,000. In a pie chart of this expenditure, the sector for Education has a central angle of 54°. How much does the family spend on Education?",
          "options": ["₹6,400", "₹8,100", "₹5,400", "₹7,200"],
          "answer": 3,
          "explanation": "Education = (54/360) × 48000 = 0.15 × 48000 = <b>₹7,200</b>."
        },
        {
          "q": "Car production (in thousands) of a company:<br>2019: 120 | 2020: 96 | 2021: 132 | 2022: 150 | 2023: 162<br>What is the percentage increase in production from 2020 to 2022?",
          "options": ["54%", "56.25%", "36%", "62.5%"],
          "answer": 1,
          "explanation": "Increase = 150 − 96 = 54 thousand. Base = 2020 value = 96.<br>% increase = 54/96 × 100 = <b>56.25%</b>."
        },
        {
          "q": "Car production (in thousands) of a company:<br>2019: 120 | 2020: 96 | 2021: 132 | 2022: 150 | 2023: 162<br>What is the ratio of the total production in 2019 and 2020 together to the total production in 2022 and 2023 together?",
          "options": ["3 : 4", "13 : 9", "9 : 13", "8 : 13"],
          "answer": 2,
          "explanation": "2019 + 2020 = 120 + 96 = 216; 2022 + 2023 = 150 + 162 = 312.<br>216 : 312 → divide by 24 → <b>9 : 13</b>."
        },
        {
          "q": "A student's monthly expenditure of ₹24,000 is shown in a pie chart with the following shares:<br>Rent: 30% | Food: 25% | Travel: 15% | Books: 10% | Others: 20%<br>How much more does the student spend on Food than on Books?",
          "options": [
            "₹3,000",
            "₹4,200",
            "₹3,600",
            "₹2,400"
          ],
          "answer": 2,
          "explanation": "Difference = (25% − 10%) of ₹24,000 = 15% × 24,000 = ₹3,600."
        },
        {
          "q": "A student's monthly expenditure of ₹24,000 is shown in a pie chart with the following shares:<br>Rent: 30% | Food: 25% | Travel: 15% | Books: 10% | Others: 20%<br>What is the central angle of the sector representing Rent and Travel together?",
          "options": [
            "162°",
            "144°",
            "180°",
            "126°"
          ],
          "answer": 0,
          "explanation": "Rent + Travel = 30% + 15% = 45%; angle = 45 × 3.6° = 162°."
        },
        {
          "q": "Production (in tonnes) of a factory:<br>2019: 45 | 2020: 52 | 2021: 38 | 2022: 60 | 2023: 55<br>In how many years was the production more than the average production of the five years?",
          "options": [
            "2",
            "4",
            "1",
            "3"
          ],
          "answer": 3,
          "explanation": "Average = 250/5 = 50 tonnes. Years above 50: 2020, 2022 and 2023 → 3 years."
        },
        {
          "q": "Income and expenditure (₹ lakh) of a company:<br>2020: Income 150, Expenditure 120<br>2021: Income 180, Expenditure 150<br>2022: Income 210, Expenditure 160<br>2023: Income 240, Expenditure 210<br>Percentage profit = (Income − Expenditure)/Expenditure × 100. In which year was the percentage profit the highest?",
          "options": [
            "2020",
            "2022",
            "2021",
            "2023"
          ],
          "answer": 1,
          "explanation": "Profit %: 2020 = 25%, 2021 = 20%, 2022 = 50/160 × 100 = 31.25%, 2023 ≈ 14.3%. Highest in 2022."
        },
        {
          "q": "The mean of the observations 8, 12, x, 15, 20 and 17 is 14. What is the value of x?",
          "options": [
            "10",
            "12",
            "14",
            "11"
          ],
          "answer": 1,
          "explanation": "Sum = 14 × 6 = 84; 8 + 12 + 15 + 20 + 17 = 72, so x = 84 − 72 = 12."
        },
        {
          "q": "The average marks of 30 students of Section A are 62 and the average marks of 20 students of Section B are 72. What are the average marks of all 50 students?",
          "options": [
            "67",
            "65",
            "64",
            "66"
          ],
          "answer": 3,
          "explanation": "Combined mean = (30 × 62 + 20 × 72)/50 = (1860 + 1440)/50 = 3300/50 = 66."
        },
        {
          "q": "The mean of 25 observations was found to be 40. Later it was noticed that one observation, 56, had been wrongly copied as 36. What is the correct mean?",
          "options": [
            "40.8",
            "39.2",
            "41.2",
            "40.4"
          ],
          "answer": 0,
          "explanation": "Correct sum = 25 × 40 − 36 + 56 = 1020; correct mean = 1020/25 = 40.8."
        },
        {
          "q": "Sales (in units) of four products of a shop:<br>Product P: 2022 – 400, 2023 – 460<br>Product Q: 2022 – 250, 2023 – 300<br>Product R: 2022 – 350, 2023 – 390<br>Product S: 2022 – 200, 2023 – 250<br>What is the percentage increase in the total sales of the four products from 2022 to 2023?",
          "options": [
            "14²⁄₇%",
            "20%",
            "16⅔%",
            "15%"
          ],
          "answer": 2,
          "explanation": "Total: 2022 = 1200, 2023 = 1400. Increase = 200/1200 × 100 = 16⅔%."
        }
      ]
    },
    {
      "id": "linear-equations-graphs",
      "name": "Linear Equations & Graphs",
      "notes": [
        {
          "heading": "Consistency of a Pair of Linear Equations",
          "points": [
            "For a<sub>1</sub>x + b<sub>1</sub>y + c<sub>1</sub> = 0 and a<sub>2</sub>x + b<sub>2</sub>y + c<sub>2</sub> = 0, compare the ratios a<sub>1</sub>/a<sub>2</sub>, b<sub>1</sub>/b<sub>2</sub>, c<sub>1</sub>/c<sub>2</sub>.",
            "<b>Unique solution</b> (intersecting lines, consistent): a<sub>1</sub>/a<sub>2</sub> ≠ b<sub>1</sub>/b<sub>2</sub>.",
            "<b>Infinitely many solutions</b> (coincident lines, consistent and dependent): a<sub>1</sub>/a<sub>2</sub> = b<sub>1</sub>/b<sub>2</sub> = c<sub>1</sub>/c<sub>2</sub>.",
            "<b>No solution</b> (parallel lines, inconsistent): a<sub>1</sub>/a<sub>2</sub> = b<sub>1</sub>/b<sub>2</sub> ≠ c<sub>1</sub>/c<sub>2</sub>.",
            "Cross-multiplication: x/(b<sub>1</sub>c<sub>2</sub> − b<sub>2</sub>c<sub>1</sub>) = y/(c<sub>1</sub>a<sub>2</sub> − c<sub>2</sub>a<sub>1</sub>) = 1/(a<sub>1</sub>b<sub>2</sub> − a<sub>2</sub>b<sub>1</sub>).",
            "Trap: if equations are written as ax + by = c, the constant ratio is still c<sub>1</sub>/c<sub>2</sub> (the sign flips on both sides, so the ratio is unchanged)."
          ]
        },
        {
          "heading": "Slope, Intercepts & Special Lines",
          "points": [
            "For ax + by + c = 0: slope m = −a/b; x-intercept = −c/a; y-intercept = −c/b.",
            "Slope-intercept form y = mx + c; intercept form x/a + y/b = 1 (cuts x-axis at (a, 0) and y-axis at (0, b)).",
            "Slope through (x<sub>1</sub>, y<sub>1</sub>) and (x<sub>2</sub>, y<sub>2</sub>) = (y<sub>2</sub> − y<sub>1</sub>)/(x<sub>2</sub> − x<sub>1</sub>).",
            "Parallel lines: m<sub>1</sub> = m<sub>2</sub>. Perpendicular lines: m<sub>1</sub> × m<sub>2</sub> = −1.",
            "x = k is a line parallel to the y-axis; y = k is parallel to the x-axis. The x-axis is y = 0 and the y-axis is x = 0.",
            "The graph of y = mx (no constant) always passes through the origin; y = x and y = −x are perpendicular."
          ]
        },
        {
          "heading": "Areas, Intersections & Distances",
          "points": [
            "Line ax + by = c with the axes: triangle of area = c²/(2|ab|) (i.e. ½ × |x-intercept| × |y-intercept|).",
            "Intersection point of two lines = solution of the pair of equations; solve by elimination or substitution.",
            "Triangle formed by two lines and the x-axis: base = distance between their x-intercepts, height = |y-coordinate of their intersection|.",
            "Area with vertices (x<sub>1</sub>,y<sub>1</sub>), (x<sub>2</sub>,y<sub>2</sub>), (x<sub>3</sub>,y<sub>3</sub>) = ½|x<sub>1</sub>(y<sub>2</sub> − y<sub>3</sub>) + x<sub>2</sub>(y<sub>3</sub> − y<sub>1</sub>) + x<sub>3</sub>(y<sub>1</sub> − y<sub>2</sub>)|; area 0 means the points are collinear.",
            "Distance of (x<sub>0</sub>, y<sub>0</sub>) from ax + by + c = 0 is |ax<sub>0</sub> + by<sub>0</sub> + c|/√(a² + b²).",
            "Distance between parallel lines ax + by + c<sub>1</sub> = 0 and ax + by + c<sub>2</sub> = 0 is |c<sub>1</sub> − c<sub>2</sub>|/√(a² + b²)."
          ]
        },
        {
          "heading": "Word Problems in Two Variables",
          "points": [
            "Two-digit number with tens digit x and units digit y = 10x + y; reversed = 10y + x.",
            "Number + reversed = 11(x + y); number − reversed = 9(x − y).",
            "Cost problems (a items + b items): adding and subtracting the two equations often gives (x + y) and (x − y) directly.",
            "Age problems: if present ages are x and y, ages n years ago are (x − n) and (y − n); the age difference never changes.",
            "Fraction problems: let the fraction be x/y and form one equation per condition.",
            "Quick method in MCQs: substitute the options back into both equations instead of solving fully."
          ]
        }
      ],
      "flashcards": [
        {
          "front": "Condition for a unique solution of a pair of linear equations?",
          "back": "a<sub>1</sub>/a<sub>2</sub> ≠ b<sub>1</sub>/b<sub>2</sub> (lines intersect)"
        },
        {
          "front": "Condition for infinitely many solutions?",
          "back": "a<sub>1</sub>/a<sub>2</sub> = b<sub>1</sub>/b<sub>2</sub> = c<sub>1</sub>/c<sub>2</sub> (coincident lines)"
        },
        {
          "front": "Condition for no solution?",
          "back": "a<sub>1</sub>/a<sub>2</sub> = b<sub>1</sub>/b<sub>2</sub> ≠ c<sub>1</sub>/c<sub>2</sub> (parallel lines)"
        },
        {
          "front": "Slope of ax + by + c = 0?",
          "back": "−a/b"
        },
        {
          "front": "x- and y-intercepts of ax + by + c = 0?",
          "back": "x-intercept −c/a, y-intercept −c/b"
        },
        {
          "front": "Area of triangle formed by ax + by = c and the coordinate axes?",
          "back": "c²/(2|ab|)"
        },
        {
          "front": "Condition for two lines to be perpendicular?",
          "back": "Product of slopes m<sub>1</sub>m<sub>2</sub> = −1"
        },
        {
          "front": "Graph of x = 5 is parallel to which axis?",
          "back": "The y-axis"
        },
        {
          "front": "Distance between parallel lines ax + by + c<sub>1</sub> = 0 and ax + by + c<sub>2</sub> = 0?",
          "back": "|c<sub>1</sub> − c<sub>2</sub>|/√(a² + b²)"
        },
        {
          "front": "Difference between a two-digit number and its reverse?",
          "back": "9 × (difference of its digits)"
        },
        {
          "front": "Sum of a two-digit number and its reverse?",
          "back": "11 × (sum of its digits)"
        },
        {
          "front": "Intercept form of a line?",
          "back": "x/a + y/b = 1, cutting the axes at (a, 0) and (0, b)"
        }
      ],
      "questions": [
        {
          "q": "For what value of k will the system 2x + 3y = 7 and (k − 1)x + (k + 2)y = 3k have infinitely many solutions?",
          "options": [
            "5",
            "7",
            "3",
            "9"
          ],
          "answer": 1,
          "explanation": "2/(k − 1) = 3/(k + 2) ⇒ 2k + 4 = 3k − 3 ⇒ k = 7.<br>Check: 2/6 = 3/9 = 7/21 = 1/3."
        },
        {
          "q": "For what value of k does the system kx + 2y = 5 and 3x + y = 1 have no solution?",
          "options": [
            "6",
            "−6",
            "3/2",
            "2/3"
          ],
          "answer": 0,
          "explanation": "No solution: k/3 = 2/1 ≠ 5/1 ⇒ k = 6 (and 5 ≠ 2, so the condition holds)."
        },
        {
          "q": "What is the area of the triangle formed by the line 3x + 4y = 24 and the coordinate axes?",
          "options": [
            "48 sq units",
            "12 sq units",
            "24 sq units",
            "36 sq units"
          ],
          "answer": 2,
          "explanation": "Intercepts: x = 8, y = 6. Area = ½ × 8 × 6 = 24 sq units."
        },
        {
          "q": "What is the area of the triangle formed by the lines 2x + 3y = 12, x − y = 1 and the x-axis?",
          "options": [
            "10 sq units",
            "6 sq units",
            "7.5 sq units",
            "5 sq units"
          ],
          "answer": 3,
          "explanation": "Lines meet at (3, 2). x-intercepts are 6 and 1, so base = 5, height = 2.<br>Area = ½ × 5 × 2 = 5 sq units."
        },
        {
          "q": "What is the slope of a line perpendicular to 3x − 2y + 5 = 0?",
          "options": [
            "3/2",
            "−2/3",
            "2/3",
            "−3/2"
          ],
          "answer": 1,
          "explanation": "Slope of given line = −a/b = −3/(−2) = 3/2. Perpendicular slope = −1 ÷ (3/2) = −2/3."
        },
        {
          "q": "The sum of the digits of a two-digit number is 9. If the digits are reversed, the number increases by 27. Find the number.",
          "options": [
            "36",
            "63",
            "45",
            "27"
          ],
          "answer": 0,
          "explanation": "x + y = 9 and 9(y − x) = 27 ⇒ y − x = 3. So y = 6, x = 3; number = 36."
        },
        {
          "q": "5 pens and 3 notebooks cost ₹110, while 3 pens and 5 notebooks cost ₹130. What is the cost of 2 pens and 1 notebook?",
          "options": [
            "₹30",
            "₹50",
            "₹40",
            "₹35"
          ],
          "answer": 2,
          "explanation": "Adding: 8(p + n) = 240 ⇒ p + n = 30. Subtracting: 2(n − p) = 20 ⇒ n − p = 10.<br>n = 20, p = 10 ⇒ 2p + n = ₹40."
        },
        {
          "q": "The line through (2, 3) and (6, k) is parallel to the line 2x − y + 4 = 0. Find k.",
          "options": [
            "8",
            "5",
            "10",
            "11"
          ],
          "answer": 3,
          "explanation": "Slope of 2x − y + 4 = 0 is 2. So (k − 3)/(6 − 2) = 2 ⇒ k − 3 = 8 ⇒ k = 11."
        },
        {
          "q": "At which point do the lines 3x + 2y = 12 and 5x − 3y = 1 intersect?",
          "options": [
            "(3, 2)",
            "(2, 3)",
            "(2, −3)",
            "(4, 0)"
          ],
          "answer": 1,
          "explanation": "Multiply the first by 3 and the second by 2 and add: 19x = 38 → x = 2; then 2y = 12 − 6 → y = 3."
        },
        {
          "q": "What is the distance between the parallel lines 3x + 4y − 7 = 0 and 6x + 8y + 11 = 0?",
          "options": [
            "3.6 units",
            "0.3 units",
            "1.8 units",
            "2.5 units"
          ],
          "answer": 3,
          "explanation": "Write the second line as 3x + 4y + 5.5 = 0. Distance = |−7 − 5.5|/√(3² + 4²) = 12.5/5 = 2.5 units."
        },
        {
          "q": "Five years ago, A was three times as old as B. Ten years from now, A will be twice as old as B. What is A's present age?",
          "options": [
            "50 years",
            "45 years",
            "40 years",
            "55 years"
          ],
          "answer": 0,
          "explanation": "A − 5 = 3(B − 5) → A = 3B − 10; A + 10 = 2(B + 10) → A = 2B + 10. So B = 20 and A = 50."
        },
        {
          "q": "If 2 is added to both the numerator and the denominator of a fraction, it becomes 9/11. If 3 is added to both, it becomes 5/6. What is the fraction?",
          "options": [
            "5/7",
            "3/5",
            "7/9",
            "9/11"
          ],
          "answer": 2,
          "explanation": "(x + 2)/(y + 2) = 9/11 → 11x − 9y = −4; (x + 3)/(y + 3) = 5/6 → 6x − 5y = −3. Solving: x = 7, y = 9."
        },
        {
          "q": "What is the equation of the line whose x-intercept is 4 and y-intercept is −3?",
          "options": [
            "3x − 4y = 12",
            "4x − 3y = 12",
            "3x + 4y = 12",
            "4x + 3y = 12"
          ],
          "answer": 0,
          "explanation": "Intercept form: x/4 + y/(−3) = 1. Multiplying by 12: 3x − 4y = 12."
        },
        {
          "q": "For what value of k are the points (1, 2), (3, k) and (7, 14) collinear?",
          "options": [
            "8",
            "6",
            "5",
            "4"
          ],
          "answer": 1,
          "explanation": "Slope from (1, 2) to (7, 14) = 12/6 = 2. So (k − 2)/(3 − 1) = 2 → k = 6."
        }
      ]
    },
    {
      "id": "congruence-similarity-tangents",
      "name": "Congruence, Similarity, Quadrilaterals & Tangents",
      "notes": [
        {
          "heading": "Congruence & Similarity",
          "points": [
            "Congruence rules: <b>SSS, SAS</b> (angle must be included), <b>ASA, AAS, RHS</b> (right angle–hypotenuse–side). <b>SSA and AAA are NOT</b> congruence rules.",
            "AAA only proves similarity (same shape, not necessarily same size). Corresponding parts of congruent triangles are equal (CPCT).",
            "Similarity criteria: <b>AA</b> (or AAA), <b>SAS</b> (two sides in proportion + included angle equal), <b>SSS</b> (all three sides in proportion).",
            "For similar triangles, ratio of sides = ratio of perimeters = ratio of corresponding altitudes, medians and angle bisectors.",
            "<b>Ratio of areas = square of ratio of corresponding sides</b> (or altitudes/medians).",
            "Right angle at A, AD ⟂ hypotenuse BC: ΔABD ~ ΔCAD ~ ΔCBA; AD² = BD × DC; AB² = BD × BC; AC² = CD × CB."
          ]
        },
        {
          "heading": "BPT, Angle Bisector Theorem & Apollonius",
          "points": [
            "<b>Basic Proportionality Theorem (Thales)</b>: if DE ∥ BC with D on AB and E on AC, then AD/DB = AE/EC (and ΔADE ~ ΔABC). The converse is also true.",
            "<b>Midpoint theorem</b>: the segment joining the midpoints of two sides is parallel to the third side and equal to half of it.",
            "<b>Internal angle bisector theorem</b>: if AD bisects ∠A (D on BC), then BD/DC = AB/AC. The external bisector divides BC externally in the same ratio.",
            "<b>Apollonius theorem</b>: if AD is a median, AB² + AC² = 2(AD² + BD²).",
            "Median length: m<sub>a</sub> = ½√(2b² + 2c² − a²).",
            "Sum of squares of the three medians = ¾ × (sum of squares of the three sides)."
          ]
        },
        {
          "heading": "Quadrilateral Properties",
          "points": [
            "<b>Parallelogram</b>: opposite sides equal and parallel, opposite angles equal, adjacent angles supplementary, diagonals bisect each other; d<sub>1</sub>² + d<sub>2</sub>² = 2(a² + b²).",
            "<b>Rhombus</b>: all sides equal, diagonals bisect each other at 90°; 4a² = d<sub>1</sub>² + d<sub>2</sub>²; area = ½ d<sub>1</sub>d<sub>2</sub>. <b>Rectangle</b>: diagonals equal. <b>Square</b>: diagonals equal and perpendicular.",
            "<b>Cyclic quadrilateral</b>: opposite angles sum to 180°; exterior angle = interior opposite angle; Ptolemy: AC × BD = AB × CD + AD × BC. A cyclic parallelogram is a rectangle.",
            "<b>Trapezium</b>: area = ½ × (sum of parallel sides) × height; the line joining midpoints of the non-parallel sides = ½ × (sum of parallel sides); diagonals divide each other in the ratio of the parallel sides. An isosceles trapezium is cyclic.",
            "Joining the midpoints of the sides of any quadrilateral gives a parallelogram with half the area.",
            "If a circle is inscribed in quadrilateral ABCD (tangential quadrilateral): AB + CD = AD + BC."
          ]
        },
        {
          "heading": "Circles: Chords, Tangents & Secants",
          "points": [
            "Angle at centre = 2 × angle at circumference on the same arc; angles in the same segment are equal; angle in a semicircle = 90°.",
            "Perpendicular from the centre bisects a chord; equal chords are equidistant from the centre. Intersecting chords AB, CD at P: PA × PB = PC × PD.",
            "Tangent ⟂ radius at point of contact; two tangents from an external point are equal; tangent length = √(d² − r²). If PA, PB are tangents: ∠APB + ∠AOB = 180°.",
            "<b>Alternate segment theorem</b>: angle between a tangent and a chord = angle in the alternate segment.",
            "<b>Tangent–secant theorem</b>: PT² = PA × PB (secant PAB from external point P). Two secants: PA × PB = PC × PD.",
            "Common tangents (centres d apart): <b>direct</b> = √(d² − (r<sub>1</sub> − r<sub>2</sub>)²), <b>transverse</b> = √(d² − (r<sub>1</sub> + r<sub>2</sub>)²). Number: separate 4, touching externally 3, intersecting 2, touching internally 1, one inside the other 0."
          ]
        }
      ],
      "flashcards": [
        {
          "front": "Which two combinations are NOT valid congruence rules?",
          "back": "SSA and AAA (AAA gives only similarity)"
        },
        {
          "front": "Ratio of areas of two similar triangles?",
          "back": "Square of the ratio of corresponding sides (or altitudes, medians)"
        },
        {
          "front": "Basic Proportionality Theorem?",
          "back": "If DE ∥ BC in ΔABC, then AD/DB = AE/EC"
        },
        {
          "front": "Angle bisector theorem (AD bisects ∠A)?",
          "back": "BD/DC = AB/AC"
        },
        {
          "front": "Apollonius theorem (AD median)?",
          "back": "AB² + AC² = 2(AD² + BD²)"
        },
        {
          "front": "Relation between side and diagonals of a rhombus?",
          "back": "4a² = d<sub>1</sub>² + d<sub>2</sub>²"
        },
        {
          "front": "Sum of squares of diagonals of a parallelogram?",
          "back": "d<sub>1</sub>² + d<sub>2</sub>² = 2(a² + b²)"
        },
        {
          "front": "Opposite angles of a cyclic quadrilateral?",
          "back": "Supplementary (sum = 180°)"
        },
        {
          "front": "Length of direct common tangent?",
          "back": "√(d² − (r<sub>1</sub> − r<sub>2</sub>)²)"
        },
        {
          "front": "Length of transverse common tangent?",
          "back": "√(d² − (r<sub>1</sub> + r<sub>2</sub>)²)"
        },
        {
          "front": "Tangent–secant theorem?",
          "back": "PT² = PA × PB"
        },
        {
          "front": "Number of common tangents when two circles touch externally?",
          "back": "3"
        }
      ],
      "questions": [
        {
          "q": "Which of the following is NOT a criterion for congruence of triangles?",
          "options": [
            "SAS",
            "RHS",
            "SSA",
            "ASA"
          ],
          "answer": 2,
          "explanation": "SSA (angle not included between the two sides) does not guarantee congruence; SAS, RHS and ASA do."
        },
        {
          "q": "In ΔABC, D and E are points on AB and AC such that DE ∥ BC and AD : DB = 2 : 3. What is the ratio of the area of ΔADE to the area of trapezium DBCE?",
          "options": [
            "4 : 25",
            "4 : 21",
            "2 : 3",
            "4 : 9"
          ],
          "answer": 1,
          "explanation": "ΔADE ~ ΔABC with AD/AB = 2/5, so areas are 4 : 25.<br>Trapezium = 25 − 4 = 21 ⇒ ratio 4 : 21."
        },
        {
          "q": "In ΔABC, AB = 12 cm, AC = 8 cm and BC = 15 cm. The bisector of ∠A meets BC at D. Find BD.",
          "options": [
            "6 cm",
            "7.5 cm",
            "10 cm",
            "9 cm"
          ],
          "answer": 3,
          "explanation": "BD/DC = AB/AC = 12/8 = 3/2. BD = 15 × 3/5 = 9 cm."
        },
        {
          "q": "In ΔABC, AB = 7 cm, AC = 9 cm and BC = 8 cm. What is the length of the median AD?",
          "options": [
            "7 cm",
            "6 cm",
            "√55 cm",
            "8 cm"
          ],
          "answer": 0,
          "explanation": "Apollonius: 49 + 81 = 2(AD² + 4²) ⇒ 65 = AD² + 16 ⇒ AD² = 49 ⇒ AD = 7 cm."
        },
        {
          "q": "The diagonals of a rhombus are 24 cm and 10 cm. What is its perimeter?",
          "options": [
            "68 cm",
            "48 cm",
            "26 cm",
            "52 cm"
          ],
          "answer": 3,
          "explanation": "Side = √(12² + 5²) = 13 cm (diagonals bisect at 90°). Perimeter = 4 × 13 = 52 cm."
        },
        {
          "q": "ABCD is a cyclic quadrilateral with ∠A = (2x + 10)° and ∠C = (3x − 5)°. Find ∠C.",
          "options": [
            "80°",
            "95°",
            "100°",
            "105°"
          ],
          "answer": 2,
          "explanation": "∠A + ∠C = 180° ⇒ 5x + 5 = 180 ⇒ x = 35. ∠C = 105 − 5 = 100°."
        },
        {
          "q": "Two circles of radii 8 cm and 3 cm have their centres 13 cm apart. What is the length of their direct common tangent?",
          "options": [
            "4√3 cm",
            "12 cm",
            "10 cm",
            "11 cm"
          ],
          "answer": 1,
          "explanation": "Direct = √(13² − (8 − 3)²) = √(169 − 25) = √144 = 12 cm.<br>(Transverse would be √(169 − 121) = 4√3 cm.)"
        },
        {
          "q": "From an external point P, a secant PAB cuts a circle at A and B, with PA = 4 cm and AB = 5 cm. What is the length of the tangent PT from P to the circle?",
          "options": [
            "6 cm",
            "√20 cm",
            "4.5 cm",
            "9 cm"
          ],
          "answer": 0,
          "explanation": "PB = 4 + 5 = 9 cm. PT² = PA × PB = 4 × 9 = 36 ⇒ PT = 6 cm."
        },
        {
          "q": "In ΔABC, ∠A = 90° and AD is perpendicular to BC. If BD = 4 cm and DC = 9 cm, what is the length of AD?",
          "options": [
            "6 cm",
            "6.5 cm",
            "5 cm",
            "7 cm"
          ],
          "answer": 0,
          "explanation": "ΔABD ~ ΔCAD, so AD² = BD × DC = 4 × 9 = 36 → AD = 6 cm."
        },
        {
          "q": "ΔABC ~ ΔPQR. The areas of ΔABC and ΔPQR are 64 cm² and 121 cm² respectively. If QR = 15.4 cm, what is the length of BC?",
          "options": [
            "12.8 cm",
            "9.6 cm",
            "11.2 cm",
            "10.4 cm"
          ],
          "answer": 2,
          "explanation": "BC/QR = √(64/121) = 8/11, so BC = 15.4 × 8/11 = 11.2 cm."
        },
        {
          "q": "The tangent drawn at the point A of a circle with centre O makes an angle of 58° with the chord AB. What is the measure of ∠AOB?",
          "options": [
            "58°",
            "122°",
            "64°",
            "116°"
          ],
          "answer": 3,
          "explanation": "By the alternate segment theorem, the angle in the alternate segment = 58°. The angle at the centre on the same arc = 2 × 58° = 116°."
        },
        {
          "q": "A circle touches all four sides of a quadrilateral ABCD. If AB = 8 cm, BC = 11 cm and CD = 9 cm, what is the length of AD?",
          "options": [
            "10 cm",
            "6 cm",
            "12 cm",
            "7 cm"
          ],
          "answer": 1,
          "explanation": "For a quadrilateral with an inscribed circle, AB + CD = AD + BC → 8 + 9 = AD + 11 → AD = 6 cm."
        },
        {
          "q": "The adjacent sides of a parallelogram are 5 cm and 7 cm, and one of its diagonals is 8 cm. What is the length of the other diagonal?",
          "options": [
            "2√19 cm",
            "6 cm",
            "2√21 cm",
            "4√5 cm"
          ],
          "answer": 2,
          "explanation": "d₁² + d₂² = 2(a² + b²) → 64 + d₂² = 2(25 + 49) = 148 → d₂² = 84 → d₂ = 2√21 cm."
        },
        {
          "q": "Two circles of radii 5 cm and 3 cm have their centres 17 cm apart. What is the length of their transverse common tangent?",
          "options": [
            "16 cm",
            "12 cm",
            "14 cm",
            "15 cm"
          ],
          "answer": 3,
          "explanation": "Transverse common tangent = √(d² − (r₁ + r₂)²) = √(289 − 64) = √225 = 15 cm."
        }
      ]
    },
    {
      "id": "mensuration-3d-advanced",
      "name": "Prism, Pyramid, Frustum & Solids",
      "notes": [
        {
          "heading": "Right Prism & Cuboid",
          "points": [
            "Right prism: <b>Volume = base area × height</b>; <b>LSA = perimeter of base × height</b>; TSA = LSA + 2 × base area.",
            "Useful base areas: equilateral triangle (√3/4)a²; regular hexagon (3√3/2)a²; right triangle ½ × product of legs.",
            "Cuboid: diagonal = √(l² + b² + h²); TSA = 2(lb + bh + hl); (l + b + h)² = diagonal² + TSA. Cube diagonal = a√3.",
            "Euler's formula for polyhedra: F + V − E = 2 (cube: 6 faces, 8 vertices, 12 edges).",
            "Cube of side n painted and cut into n³ unit cubes: 3 faces painted = 8; 2 faces = 12(n − 2); 1 face = 6(n − 2)²; unpainted = (n − 2)³."
          ]
        },
        {
          "heading": "Regular Right Pyramid",
          "points": [
            "<b>Volume = ⅓ × base area × height</b>; <b>LSA = ½ × perimeter of base × slant height</b>; TSA = LSA + base area.",
            "Square base (side a, height h): slant height l = √(h² + (a/2)²); lateral edge = √(h² + a²/2).",
            "Equilateral-triangle base (side a): inradius of base = a/(2√3), so slant height = √(h² + a²/12); lateral edge = √(h² + a²/3).",
            "Regular tetrahedron (all edges a): volume = a³/(6√2); TSA = √3 a²; height = a√(2/3).",
            "A pyramid has 1/3 the volume of a prism with the same base and height (like a cone vs a cylinder)."
          ]
        },
        {
          "heading": "Frustum & Hollow Solids",
          "points": [
            "Frustum of cone (radii R, r; height h): <b>V = (πh/3)(R² + r² + Rr)</b>; slant l = √(h² + (R − r)²); CSA = π(R + r)l; TSA = π(R + r)l + πR² + πr².",
            "Frustum of pyramid (end areas A<sub>1</sub>, A<sub>2</sub>): V = (h/3)(A<sub>1</sub> + A<sub>2</sub> + √(A<sub>1</sub>A<sub>2</sub>)).",
            "A cone cut parallel to the base at half its height: small cone = 1/8 of the volume, frustum = 7/8.",
            "Hollow cylinder (outer R, inner r, height h): V = πh(R² − r²); total curved surface (outer + inner) = 2πh(R + r); TSA = 2πh(R + r) + 2π(R² − r²).",
            "Hollow sphere (outer R, inner r): volume of material = (4/3)π(R³ − r³); outer surface area = 4πR²."
          ]
        },
        {
          "heading": "Melting, Recasting & Percentage Change",
          "points": [
            "On melting and recasting, <b>volume stays the same</b>: number of new solids = volume of original ÷ volume of one new solid.",
            "Sphere of radius R recast into n equal spheres of radius r: n = (R/r)³. Total surface area increases.",
            "Drawing a wire: volume of metal = πr² × length of wire (keep units the same: 1 m = 100 cm, 1 cm = 10 mm).",
            "Rise in water level = volume of the immersed solid ÷ base area of the container. 1 litre = 1000 cm³.",
            "If every linear dimension is scaled by k: surface area × k², volume × k³. A 20% rise in each edge of a cube raises area by 44% and volume by 72.8%.",
            "Cylinder or cone with radius change r% and height change h%: new/old volume = (1 + r/100)² × (1 + h/100)."
          ]
        }
      ],
      "flashcards": [
        {
          "front": "Volume and LSA of a right prism?",
          "back": "V = base area × height; LSA = base perimeter × height"
        },
        {
          "front": "Volume of a pyramid?",
          "back": "⅓ × base area × height"
        },
        {
          "front": "LSA of a regular pyramid?",
          "back": "½ × perimeter of base × slant height"
        },
        {
          "front": "Slant height of a square pyramid (side a, height h)?",
          "back": "√(h² + (a/2)²)"
        },
        {
          "front": "Volume of a frustum of a cone?",
          "back": "(πh/3)(R² + r² + Rr)"
        },
        {
          "front": "CSA of a frustum of a cone?",
          "back": "π(R + r)l, where l = √(h² + (R − r)²)"
        },
        {
          "front": "Volume of a hollow cylinder?",
          "back": "πh(R² − r²)"
        },
        {
          "front": "Volume of metal in a hollow sphere?",
          "back": "(4/3)π(R³ − r³)"
        },
        {
          "front": "Diagonal of a cuboid?",
          "back": "√(l² + b² + h²)"
        },
        {
          "front": "(l + b + h)² in terms of cuboid diagonal and TSA?",
          "back": "diagonal² + TSA"
        },
        {
          "front": "Volume of a regular tetrahedron of edge a?",
          "back": "a³/(6√2)"
        },
        {
          "front": "Each dimension scaled by k: effect on volume?",
          "back": "Volume becomes k³ times (area k² times)"
        }
      ],
      "questions": [
        {
          "q": "The base of a right prism is a right triangle with legs 6 cm and 8 cm. If the total surface area of the prism is 288 cm², what is its volume?",
          "options": [
            "192 cm³",
            "288 cm³",
            "240 cm³",
            "480 cm³"
          ],
          "answer": 2,
          "explanation": "Base area = 24, hypotenuse = 10, perimeter = 24. TSA = 24h + 2 × 24 = 288 ⇒ h = 10.<br>Volume = 24 × 10 = 240 cm³."
        },
        {
          "q": "A right pyramid has a square base of side 10 cm and height 12 cm. What is its total surface area?",
          "options": [
            "360 cm²",
            "260 cm²",
            "400 cm²",
            "460 cm²"
          ],
          "answer": 0,
          "explanation": "Slant height = √(12² + 5²) = 13. LSA = ½ × 40 × 13 = 260.<br>TSA = 260 + 100 = 360 cm²."
        },
        {
          "q": "The base of a right pyramid is an equilateral triangle of side 6 cm and its height is 10√3 cm. What is its volume?",
          "options": [
            "270 cm³",
            "45 cm³",
            "30√3 cm³",
            "90 cm³"
          ],
          "answer": 3,
          "explanation": "Base area = (√3/4) × 36 = 9√3. Volume = ⅓ × 9√3 × 10√3 = ⅓ × 270 = 90 cm³."
        },
        {
          "q": "A bucket in the shape of a frustum of a cone has top and bottom radii 20 cm and 10 cm and height 21 cm. What is its capacity? (π = 22/7)",
          "options": [
            "13.2 litres",
            "15.4 litres",
            "17.6 litres",
            "14.3 litres"
          ],
          "answer": 1,
          "explanation": "V = (π × 21/3)(400 + 100 + 200) = 7π × 700 = 4900 × 22/7 = 15400 cm³ = 15.4 litres."
        },
        {
          "q": "An iron pipe 14 cm long has outer diameter 10 cm and inner diameter 8 cm. What is the volume of iron in it? (π = 22/7)",
          "options": [
            "352 cm³",
            "792 cm³",
            "396 cm³",
            "440 cm³"
          ],
          "answer": 2,
          "explanation": "R = 5, r = 4. V = πh(R² − r²) = (22/7) × 14 × 9 = 44 × 9 = 396 cm³."
        },
        {
          "q": "A hollow metallic sphere with external radius 6 cm and internal radius 4 cm is melted and recast into a solid cone of base radius 4 cm. What is the height of the cone?",
          "options": [
            "38 cm",
            "19 cm",
            "36 cm",
            "42 cm"
          ],
          "answer": 0,
          "explanation": "(4/3)π(216 − 64) = (1/3)π × 16 × h ⇒ 4 × 152 = 16h ⇒ h = 38 cm."
        },
        {
          "q": "The radius of a cylinder is increased by 10% and its height is decreased by 10%. What is the change in its volume?",
          "options": [
            "No change",
            "10.9% increase",
            "9.9% decrease",
            "8.9% increase"
          ],
          "answer": 3,
          "explanation": "New/old = (1.1)² × 0.9 = 1.21 × 0.9 = 1.089 ⇒ 8.9% increase."
        },
        {
          "q": "The sum of the length, breadth and height of a cuboid is 19 cm and its diagonal is 11 cm. What is its total surface area?",
          "options": [
            "120 cm²",
            "240 cm²",
            "260 cm²",
            "361 cm²"
          ],
          "answer": 1,
          "explanation": "(l + b + h)² = diagonal² + TSA ⇒ 361 = 121 + TSA ⇒ TSA = 240 cm²."
        },
        {
          "q": "The base of a right prism is a regular hexagon of side 4 cm and its height is 10 cm. What is the volume of the prism?",
          "options": [
            "120√3 cm³",
            "240√3 cm³",
            "480√3 cm³",
            "160√3 cm³"
          ],
          "answer": 1,
          "explanation": "Base area = (3√3/2) × 4² = 24√3 cm²; volume = 24√3 × 10 = 240√3 cm³."
        },
        {
          "q": "A cube of side 5 cm is painted on all its faces and then cut into 1 cm × 1 cm × 1 cm cubes. How many of the small cubes have exactly one face painted?",
          "options": [
            "36",
            "27",
            "48",
            "54"
          ],
          "answer": 3,
          "explanation": "Cubes with one face painted = 6(n − 2)² = 6 × 3² = 54."
        },
        {
          "q": "A frustum of a right circular cone has end radii 10 cm and 4 cm and height 8 cm. What is its curved surface area? (π = 22/7)",
          "options": [
            "440 cm²",
            "616 cm²",
            "528 cm²",
            "352 cm²"
          ],
          "answer": 0,
          "explanation": "Slant height = √(8² + (10 − 4)²) = 10 cm. CSA = π(R + r)l = (22/7) × 14 × 10 = 440 cm²."
        },
        {
          "q": "What is the volume of a regular tetrahedron each of whose edges is 6 cm?",
          "options": [
            "36√2 cm³",
            "9√2 cm³",
            "18√2 cm³",
            "27√2 cm³"
          ],
          "answer": 2,
          "explanation": "Volume = a³/(6√2) = 216/(6√2) = 36/√2 = 18√2 cm³."
        },
        {
          "q": "A solid copper sphere of radius 3 cm is melted and drawn into a wire of diameter 2 mm. What is the length of the wire?",
          "options": [
            "36 m",
            "3.6 m",
            "360 m",
            "9 m"
          ],
          "answer": 0,
          "explanation": "Volume = (4/3)π × 3³ = 36π cm³. Wire radius = 0.1 cm, so length = 36π/(π × 0.01) = 3600 cm = 36 m."
        },
        {
          "q": "150 spherical marbles, each of diameter 1.4 cm, are dropped into a cylindrical vessel of diameter 7 cm partly filled with water. If all the marbles are completely immersed, by how much does the water level rise?",
          "options": [
            "2.8 cm",
            "4.2 cm",
            "6.4 cm",
            "5.6 cm"
          ],
          "answer": 3,
          "explanation": "Rise = 150 × (4/3)π(0.7)³ ÷ π(3.5)² = 68.6/12.25 = 5.6 cm."
        }
      ]
    },
    {
      "id": "trig-radian-complementary",
      "name": "Degree–Radian & Complementary Angles",
      "notes": [
        {
          "heading": "Degree–Radian Conversion",
          "points": [
            "<b>π rad = 180°</b>. Degree → radian: multiply by <b>π/180</b>. Radian → degree: multiply by <b>180/π</b>.",
            "1 rad = 180/π ≈ <b>57.3°</b> (57°16′22″ using π = 22/7); 1° = π/180 ≈ 0.01745 rad.",
            "Common values: 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 120° = 2π/3, 135° = 3π/4, 150° = 5π/6, 270° = 3π/2, 360° = 2π.",
            "1° = 60′ (minutes), 1′ = 60″ (seconds). Convert minutes to a decimal first: 22°30′ = 22.5° = π/8; 67°30′ = 67.5° = 3π/8.",
            "Right angle = 90° = π/2 rad = 100 grades (centesimal system: 1 grade = 0.9°)."
          ]
        },
        {
          "heading": "Arc, Sector & Clock Angles in Radians",
          "points": [
            "Arc length <b>l = rθ</b> and θ = l/r — valid only when θ is in <b>radians</b>.",
            "Sector area = <b>½r²θ</b> = <b>½lr</b> (θ in radians); in degrees it is (θ/360°) × πr².",
            "Perimeter of a sector = 2r + l.",
            "Minute hand turns 6° per minute = π/30 rad/min (2π rad per hour); hour hand turns 0.5° per minute = π/360 rad/min (π/6 rad per hour).",
            "Angle between hands at H:M = |30H − 5.5M|°; convert with π/180. E.g. 3:00 → 90° = π/2; 4:20 → 10° = π/18."
          ]
        },
        {
          "heading": "Complementary Angle Identities",
          "points": [
            "sin(90° − θ) = cos θ; cos(90° − θ) = sin θ.",
            "tan(90° − θ) = cot θ; cot(90° − θ) = tan θ.",
            "sec(90° − θ) = cosec θ; cosec(90° − θ) = sec θ.",
            "For acute angles: if sin A = cos B, tan A = cot B or sec A = cosec B, then <b>A + B = 90°</b>. E.g. sec 4A = cosec(A − 20°) → 5A − 20° = 90° → A = 22°.",
            "Useful results: tan θ · tan(90° − θ) = 1; sin θ · sec(90° − θ) = 1; sin²θ + sin²(90° − θ) = 1; sin 35°/cos 55° = 1."
          ]
        },
        {
          "heading": "Standard Products, Sums & Quadrant Signs",
          "points": [
            "<b>tan 1° · tan 2° · … · tan 89° = 1</b> (pairs tan θ · tan(90° − θ) = 1, middle term tan 45° = 1). Same for cot.",
            "Any product containing cos 90° (or sin 0°, sin 180°) is <b>0</b>: cos 1° · cos 2° · … · cos 100° = 0.",
            "<b>sin²1° + sin²2° + … + sin²89° = 44.5</b> (44 complementary pairs give 1 each, plus sin²45° = ½). Same for cos².",
            "sin²0° + sin²1° + … + sin²90° = 45.5; sin²5° + sin²10° + … + sin²85° (17 terms) = 8 + ½ = 8.5.",
            "Quadrant signs (<b>ASTC</b>): I — all positive; II — sin, cosec; III — tan, cot; IV — cos, sec.",
            "sin(180° − θ) = sin θ, cos(180° − θ) = −cos θ, tan(180° − θ) = −tan θ; sin(90° + θ) = cos θ, cos(90° + θ) = −sin θ."
          ]
        }
      ],
      "flashcards": [
        {
          "front": "π radians = ? degrees",
          "back": "180°"
        },
        {
          "front": "1 radian ≈ ? degrees",
          "back": "≈ 57.3° (57°16′22″ using π = 22/7)"
        },
        {
          "front": "Arc length formula (θ in radians)?",
          "back": "l = rθ"
        },
        {
          "front": "Area of sector (θ in radians)?",
          "back": "½r²θ = ½lr"
        },
        {
          "front": "Angle turned by minute hand in 1 minute, in radians?",
          "back": "π/30 rad (6°)"
        },
        {
          "front": "Angle turned by hour hand in 1 hour, in radians?",
          "back": "π/6 rad (30°)"
        },
        {
          "front": "sec(90° − θ) = ?",
          "back": "cosec θ"
        },
        {
          "front": "If tan A = cot B (A, B acute), then A + B = ?",
          "back": "90°"
        },
        {
          "front": "tan 1° · tan 2° · … · tan 89° = ?",
          "back": "1"
        },
        {
          "front": "sin²1° + sin²2° + … + sin²89° = ?",
          "back": "44.5 (= 89/2)"
        },
        {
          "front": "Which ratios are positive in the 3rd quadrant?",
          "back": "tan and cot (ASTC rule)"
        },
        {
          "front": "22°30′ in radians?",
          "back": "π/8"
        }
      ],
      "questions": [
        {
          "q": "The radian measure 5π/12 is equal to:",
          "options": [
            "60°",
            "75°",
            "105°",
            "150°"
          ],
          "answer": 1,
          "explanation": "5π/12 × 180/π = 5 × 15 = 75°."
        },
        {
          "q": "An arc of length 22 cm subtends an angle of 60° at the centre of a circle. The radius of the circle is (take π = 22/7):",
          "options": [
            "21 cm",
            "14 cm",
            "7 cm",
            "42 cm"
          ],
          "answer": 0,
          "explanation": "60° = π/3 rad = 22/21. r = l/θ = 22 ÷ (22/21) = 21 cm."
        },
        {
          "q": "The value of tan 1° · tan 2° · tan 3° · … · tan 89° is:",
          "options": [
            "1",
            "0",
            "√3",
            "89"
          ],
          "answer": 0,
          "explanation": "tan θ · tan(90° − θ) = tan θ · cot θ = 1 for each of 44 pairs, and tan 45° = 1. Product = 1."
        },
        {
          "q": "The value of sin²1° + sin²2° + sin²3° + … + sin²89° is:",
          "options": [
            "44",
            "45",
            "89/2",
            "89"
          ],
          "answer": 2,
          "explanation": "sin²θ + sin²(90° − θ) = sin²θ + cos²θ = 1 for 44 pairs, plus sin²45° = ½. Sum = 44 + ½ = 89/2."
        },
        {
          "q": "The angle between the hour hand and the minute hand of a clock at 4:20, in radians, is:",
          "options": [
            "π/9",
            "π/36",
            "π/12",
            "π/18"
          ],
          "answer": 3,
          "explanation": "|30 × 4 − 5.5 × 20| = |120 − 110| = 10°. 10 × π/180 = π/18."
        },
        {
          "q": "If sec 4A = cosec(A − 20°), where 4A is an acute angle, then the value of A is:",
          "options": [
            "20°",
            "24°",
            "22°",
            "30°"
          ],
          "answer": 2,
          "explanation": "sec 4A = cosec(90° − 4A), so 90° − 4A = A − 20° → 5A = 110° → A = 22°."
        },
        {
          "q": "The area of a sector of a circle of radius 14 cm whose central angle is 1.5 radians is:",
          "options": [
            "294 cm²",
            "21 cm²",
            "98 cm²",
            "147 cm²"
          ],
          "answer": 3,
          "explanation": "Area = ½r²θ = ½ × 196 × 1.5 = 98 × 1.5 = 147 cm²."
        },
        {
          "q": "If tan 2θ · tan 4θ = 1, where 2θ and 4θ are acute angles, then θ is:",
          "options": [
            "10°",
            "15°",
            "20°",
            "30°"
          ],
          "answer": 1,
          "explanation": "tan 2θ = 1/tan 4θ = cot 4θ = tan(90° − 4θ) → 2θ = 90° − 4θ → 6θ = 90° → θ = 15°."
        },
        {
          "q": "The radian measure of 112°30′ is:",
          "options": [
            "3π/8",
            "5π/6",
            "5π/8",
            "7π/12"
          ],
          "answer": 2,
          "explanation": "112°30′ = 112.5°; 112.5 × π/180 = 5π/8."
        },
        {
          "q": "The angles of a triangle are in the ratio 2 : 3 : 4. What is the largest angle in radians?",
          "options": [
            "4π/9",
            "2π/9",
            "π/3",
            "5π/9"
          ],
          "answer": 0,
          "explanation": "Angles = 40°, 60°, 80°. Largest = 80° × π/180 = 4π/9."
        },
        {
          "q": "The value of (cos 38° · cosec 52°) ÷ (tan 18° · tan 35° · tan 60° · tan 72° · tan 55°) is:",
          "options": [
            "√3",
            "1/√3",
            "1",
            "3"
          ],
          "answer": 1,
          "explanation": "cos 38° = sin 52°, so the numerator = 1. tan 18° tan 72° = 1 and tan 35° tan 55° = 1, so the denominator = tan 60° = √3. Value = 1/√3."
        },
        {
          "q": "If cos(3A − 20°) = sin(2A + 10°), where both angles are acute, then the value of A is:",
          "options": [
            "18°",
            "22°",
            "25°",
            "20°"
          ],
          "answer": 3,
          "explanation": "cos x = sin y for acute angles means x + y = 90°: 3A − 20° + 2A + 10° = 90° → 5A = 100° → A = 20°."
        },
        {
          "q": "The value of sin²5° + sin²10° + sin²15° + … + sin²85° + sin²90° is:",
          "options": [
            "9",
            "9.5",
            "8.5",
            "10"
          ],
          "answer": 1,
          "explanation": "Pairs (5°, 85°), (10°, 80°) … (40°, 50°) give 8 × 1 = 8; sin²45° = ½ and sin²90° = 1. Total = 9.5."
        },
        {
          "q": "The minute hand of a clock is 21 cm long. How far does its tip move in 20 minutes? (π = 22/7)",
          "options": [
            "22 cm",
            "66 cm",
            "44 cm",
            "88 cm"
          ],
          "answer": 2,
          "explanation": "In 20 minutes the minute hand turns 2π/3 radians. Arc = rθ = 21 × 2π/3 = 14π = 44 cm."
        }
      ]
    },
    {
      "id": "histogram-frequency",
      "name": "Histogram, Frequency Polygon & Bar Diagram",
      "notes": [
        {
          "heading": "Frequency Distribution Basics",
          "points": [
            "Grouped data is shown in classes, e.g. Class 0–10: 5, 10–20: 8, 20–30: 12. <b>Frequency</b> = number of observations in a class.",
            "<b>Class width (size)</b> = upper limit − lower limit (exclusive classes) = difference between consecutive class marks.",
            "<b>Class mark (mid-value)</b> = (lower limit + upper limit)/2. E.g. class 25–35 → 30.",
            "Exclusive classes (10–20, 20–30: upper limit not included) vs inclusive (10–19, 20–29). To convert inclusive to exclusive with a gap of 1, subtract 0.5 from lower and add 0.5 to upper limits: 9.5–19.5, 19.5–29.5.",
            "<b>Cumulative frequency</b> (less-than type) = running total of frequencies; the last cf equals N (total). More-than type counts from the total downward.",
            "<b>Range</b> = highest observation − lowest observation."
          ]
        },
        {
          "heading": "Histogram, Frequency Polygon & Ogive",
          "points": [
            "<b>Histogram</b>: adjacent rectangles (no gaps) drawn on continuous classes; <b>area</b> of each rectangle is proportional to its frequency.",
            "Equal class widths: heights = frequencies. <b>Unequal widths</b>: height = adjusted frequency = (minimum class width ÷ class width) × frequency.",
            "<b>Frequency polygon</b>: join the mid-points of the tops of histogram rectangles, i.e. plot (class mark, frequency); close it at both ends at the class marks of imaginary zero-frequency classes. For equal class widths, its area equals the area of the histogram.",
            "<b>Ogive</b> (cumulative frequency curve): less-than ogive plots (upper limit, cf); more-than ogive plots (lower limit, cf). The x-coordinate of their intersection is the <b>median</b>.",
            "<b>Bar diagram</b>: bars of equal width with equal gaps; only the length (height) shows the value. Used for discrete/categorical data, unlike a histogram."
          ]
        },
        {
          "heading": "Grouped Mean, Median & Mode",
          "points": [
            "<b>Mean</b> = Σfx/Σf (x = class mark). Assumed-mean method: x̄ = A + Σfd/Σf, d = x − A. Step-deviation: x̄ = A + (Σfu/Σf) × h, u = (x − A)/h.",
            "<b>Median class</b> = first class whose cumulative frequency ≥ N/2.",
            "<b>Median</b> = l + [(N/2 − cf)/f] × h — l: lower limit of median class, cf: cumulative frequency of the class before it, f: its frequency, h: class width.",
            "<b>Modal class</b> = class with the highest frequency. <b>Mode</b> = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h — f₁: modal class frequency, f₀: preceding, f₂: succeeding.",
            "<b>Empirical relation</b> (moderately skewed data): Mode = 3 Median − 2 Mean. For symmetric data Mean = Median = Mode."
          ]
        },
        {
          "heading": "Reading Bar Diagrams & Tables",
          "points": [
            "Types: simple bar, multiple (grouped) bar for comparing two or more series, sub-divided (stacked) bar showing parts of a total, percentage bar.",
            "Stacked bar: total = full bar height; a component = difference between its top and bottom levels.",
            "Percentage change = (new − old)/old × 100. Ratios: cancel common factors before dividing.",
            "Average of bars = sum of values ÷ number of bars. For \"how many years above average\", find the average first, then count.",
            "From a less-than cf table, frequency of a class = its cf − previous cf (e.g. less than 30: 23, less than 20: 11 → class 20–30 has 12)."
          ]
        }
      ],
      "flashcards": [
        {
          "front": "Class mark of a class?",
          "back": "(Lower limit + Upper limit)/2"
        },
        {
          "front": "Class width from class marks?",
          "back": "Difference between two consecutive class marks"
        },
        {
          "front": "Adjusted frequency for unequal class widths?",
          "back": "(Minimum class width ÷ class width) × frequency"
        },
        {
          "front": "In a histogram, frequency is proportional to the rectangle's ___",
          "back": "Area"
        },
        {
          "front": "Frequency polygon is drawn by plotting?",
          "back": "(Class mark, frequency), closed at both ends by zero-frequency classes"
        },
        {
          "front": "Less-than and more-than ogives intersect at?",
          "back": "The median (x-coordinate)"
        },
        {
          "front": "Grouped median formula?",
          "back": "l + [(N/2 − cf)/f] × h"
        },
        {
          "front": "Grouped mode formula?",
          "back": "l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h"
        },
        {
          "front": "Empirical relation between mean, median, mode?",
          "back": "Mode = 3 Median − 2 Mean"
        },
        {
          "front": "Median class is?",
          "back": "First class with cumulative frequency ≥ N/2"
        },
        {
          "front": "Key difference: histogram vs bar diagram?",
          "back": "Histogram: continuous classes, no gaps, area matters. Bar diagram: equal gaps, only height matters."
        }
      ],
      "questions": [
        {
          "q": "In a frequency distribution the class marks are 15, 25, 35 and 45. The class width and the upper limit of the last class are respectively:",
          "options": [
            "10, 50",
            "10, 45",
            "5, 50",
            "10, 55"
          ],
          "answer": 0,
          "explanation": "Width = 25 − 15 = 10. Last class = 45 ± 5 = 40–50, so upper limit = 50."
        },
        {
          "q": "For a moderately skewed distribution, the mean is 24 and the median is 26. Using the empirical relation, the mode is:",
          "options": [
            "28",
            "30",
            "32",
            "22"
          ],
          "answer": 1,
          "explanation": "Mode = 3 Median − 2 Mean = 78 − 48 = 30."
        },
        {
          "q": "Find the mean of the data: Class 0–10: 4, 10–20: 6, 20–30: 8, 30–40: 2.",
          "options": [
            "18",
            "21",
            "20",
            "19"
          ],
          "answer": 3,
          "explanation": "Class marks 5, 15, 25, 35. Σfx = 20 + 90 + 200 + 70 = 380; Σf = 20. Mean = 380/20 = 19."
        },
        {
          "q": "Find the median of the data: Class 0–10: 5, 10–20: 8, 20–30: 12, 30–40: 10, 40–50: 5.",
          "options": [
            "24.17",
            "25.5",
            "25.83",
            "26.5"
          ],
          "answer": 2,
          "explanation": "N = 40, N/2 = 20; cf: 5, 13, 25 → median class 20–30. Median = 20 + [(20 − 13)/12] × 10 = 20 + 5.83 = 25.83."
        },
        {
          "q": "Find the mode of the data: Class 10–20: 6, 20–30: 10, 30–40: 16, 40–50: 12, 50–60: 6.",
          "options": [
            "36",
            "35",
            "34",
            "38"
          ],
          "answer": 0,
          "explanation": "Modal class 30–40 (f₁ = 16, f₀ = 10, f₂ = 12). Mode = 30 + [6/(32 − 10 − 12)] × 10 = 30 + 6 = 36."
        },
        {
          "q": "A histogram is drawn for the classes 0–5: 10, 5–15: 24, 15–35: 30. Taking the minimum class width as the base, the height (adjusted frequency) of the rectangle for class 15–35 is:",
          "options": [
            "30",
            "15",
            "6",
            "7.5"
          ],
          "answer": 3,
          "explanation": "Minimum width = 5, width of 15–35 = 20. Adjusted frequency = (5/20) × 30 = 7.5."
        },
        {
          "q": "A less-than cumulative frequency table is: less than 10: 4, less than 20: 11, less than 30: 23, less than 40: 30, less than 50: 34. The frequency of the class 20–30 is:",
          "options": [
            "23",
            "11",
            "12",
            "7"
          ],
          "answer": 2,
          "explanation": "Frequency of 20–30 = cf(less than 30) − cf(less than 20) = 23 − 11 = 12."
        },
        {
          "q": "A bar diagram shows the sales (₹ crore) of a company: 2019: 120, 2020: 150, 2021: 135, 2022: 180, 2023: 165. The percentage increase in sales from 2021 to 2022 is:",
          "options": [
            "25%",
            "33⅓%",
            "30%",
            "45%"
          ],
          "answer": 1,
          "explanation": "(180 − 135)/135 × 100 = 45/135 × 100 = 33⅓%."
        },
        {
          "q": "A frequency distribution has the inclusive classes 10–19, 20–29, 30–39 and 40–49. What are the true (exclusive) class limits of the class 20–29?",
          "options": [
            "20–30",
            "19–29",
            "20.5–29.5",
            "19.5–29.5"
          ],
          "answer": 3,
          "explanation": "Gap between classes = 20 − 19 = 1; subtract 0.5 from the lower limit and add 0.5 to the upper limit: 19.5–29.5."
        },
        {
          "q": "The mean of the following distribution is 25. Find the missing frequency x.<br>Class 0–10: 5 | 10–20: x | 20–30: 10 | 30–40: 6 | 40–50: 4",
          "options": [
            "4",
            "6",
            "5",
            "8"
          ],
          "answer": 0,
          "explanation": "Σf = 25 + x, Σfx = 665 + 15x. 665 + 15x = 25(25 + x) → 10x = 40 → x = 4."
        },
        {
          "q": "A more-than cumulative frequency table is: more than 0: 50, more than 10: 44, more than 20: 32, more than 30: 18, more than 40: 7. What is the frequency of the class 20–30?",
          "options": [
            "18",
            "11",
            "14",
            "12"
          ],
          "answer": 2,
          "explanation": "Frequency of 20–30 = (more than 20) − (more than 30) = 32 − 18 = 14."
        },
        {
          "q": "A histogram is to be drawn for the data: Class 0–10: 8 | 10–30: 20 | 30–60: 24 | 60–70: 6. After adjusting the heights for unequal class widths, which class will have the tallest rectangle?",
          "options": [
            "30–60",
            "10–30",
            "0–10",
            "60–70"
          ],
          "answer": 1,
          "explanation": "Adjusted frequency = (10/class width) × f: 0–10 → 8, 10–30 → 10, 30–60 → 8, 60–70 → 6. Tallest: 10–30."
        },
        {
          "q": "In a sub-divided bar diagram of a company's 2022 sales (₹ crore), the single bar is split as: Product A from 0 to 35, Product B from 35 to 80 and Product C from 80 to 120. What percentage of the total 2022 sales is from Product B?",
          "options": [
            "37.5%",
            "66⅔%",
            "45%",
            "30%"
          ],
          "answer": 0,
          "explanation": "Product B = 80 − 35 = 45; total = 120. Share = 45/120 × 100 = 37.5%."
        },
        {
          "q": "For a moderately skewed distribution, the mode is 45 and the mean is 36. Using the empirical relation, what is the median?",
          "options": [
            "40.5",
            "42",
            "38",
            "39"
          ],
          "answer": 3,
          "explanation": "Mode = 3 Median − 2 Mean → 45 = 3 Median − 72 → Median = 117/3 = 39."
        }
      ]
    }
  ]
};
