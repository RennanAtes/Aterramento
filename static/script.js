function calcularResultado() {
    const e12 = parseFloat(document.getElementById("e12Input").value);
    const l = parseFloat(document.getElementById("lInput").value);
    const d = parseFloat(document.getElementById("dInput").value);
  
    const e13 = 2 * e12;
    const e14 = 3 * e12;
    const b12 = Math.sqrt((l ** 2) + (e12 ** 2));
    const b13 = Math.sqrt((l ** 2) + (e13 ** 2));
    const b14 = Math.sqrt((l ** 2) + (e14 ** 2));
  
    const r11 = (1 / (2 * 3.1415 * l)) * Math.log((4 * l) / d);
    const r12 = (1 / (4 * 3.1415 * l)) * Math.log((((b12 + l) ** 2) - (e12 ** 2)) / ((e12 ** 2) - ((b12 - l) ** 2)));
    const r13 = (1 / (4 * 3.1415 * l)) * Math.log((((b13 + l) ** 2) - (e13 ** 2)) / ((e13 ** 2) - ((b13 - l) ** 2)));
    const r14 = (1 / (4 * 3.1415 * l)) * Math.log((((b14 + l) ** 2) - (e14 ** 2)) / ((e14 ** 2) - ((b14 - l) ** 2)));
  
    const r22 = r11;
    const r33 = r11;
    const r44 = r11;
    const r21 = r12;
    const r23 = r12;
    const r32 = r12;
    const r34 = r12;
    const r43 = r12;
    const r31 = r13;
    const r42 = r13;
    const r24 = r13;
    const r41 = r14;
  
    const r1 = r11 + r12 + r13 + r14;
    const r2 = r21 + r22 + r23 + r24;
    const r3 = r31 + r32 + r33 + r34;
    const r4 = r41 + r42 + r43 + r44;
  
    const req = 1 / ((1 / r1) + (1 / r2) + (1 / r3) + (1 / r4));
  
    const pa = 40;
    const resultadoFinal = req * pa;
  
    document.getElementById("resultado").textContent = `Resultado final = ${resultadoFinal}`;
  }
  