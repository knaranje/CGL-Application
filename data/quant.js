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
        }
      ]
    }
  ]
};
