from django.shortcuts import render
import math as m

# Create your views here.



def calculo(request):

    calculo1 = ''
    calculo2 = ''


        #import dos modulos

    #entrada de dados
    if request.method == 'POST':
        num_barra = float(request.POST.get('num_barra'))
        l = float(request.POST.get('l'))
        pa = float(request.POST.get('pa'))
        d = float(request.POST.get('d'))

        if num_barra > 1:
            e = float(request.POST.get('e'))

        #calculos das resistividades

        pi = m.pi

        def calc_res_barra():
            res_barra = (pa/(2 * pi * l)) * (m.log((4 * l) / (d/1000)))
            return res_barra


        def calculo_rel(x):
            b = m.sqrt((l ** 2) + ((x * e) ** 2))

            res_barra_relativa = (pa/(4 * pi * l))
            res_barra_relativa = res_barra_relativa * m.log((((b + l) ** 2) - (e ** 2)) / (e**2) - (b - l))
            return res_barra_relativa

        def calc_arranjo(num_barra):
            calc_rel14 = 1/(1/calc_res_barra())+(1/calculo_rel(1))+(1/calculo_rel(2))+(1/calculo_rel(3))

            calc_rel23 = 1/(1/calc_res_barra())+((1/calculo_rel(1))*2)+(1/calculo_rel(2))

            calc_final = 1/((1/calc_rel23)+(1/calc_rel23)+(1/calc_rel14)+(1/calc_rel14))
            return calc_final


        # demonstração dos resultados

        if num_barra == 1:
            calculo1 = calc_arranjo()
        else:
            print('Chegou aqui')
            calculo2 = calc_arranjo(num_barra)

    print(calculo1)
    print(calculo2)
    context = {
        'resposta1': calculo1,
        'reposta2': calculo2
    }

    return render(request, 'index.html', context)