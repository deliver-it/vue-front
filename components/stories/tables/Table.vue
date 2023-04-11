<template>
    <div class="relative overflow-x-auto ">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs font-medium text-gray-700 border-b">
          <tr >
            <th scope="col" class="px-3 py-3">
              ID
            </th>
            <th scope="col" class="px-3 py-3">
              Resp.
            </th>
            <th scope="col" class="px-3 py-3">
              Data Criação
            </th>
            <th scope="col" class="px-3 py-3">
              E-mail
            </th>
            <th scope="col" class="px-3 py-3">
              Empresa
            </th>
            <th scope="col" class="px-3 py-3">
              Seguradora
            </th>
            <th scope="col" class="px-3 py-3">
              Tipo
            </th>
            <th scope="col" class="px-3 py-3">
              Apólice
            </th>
            <th scope="col" class="px-3 py-3">
              Vencimento
            </th>
            <th scope="col" class="px-3 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          
          <tr v-for="(item, index) in tableData" :key="index" :class="index % 2 === 0 ? 'bg-white text-black text-mov-label-md hover:border-l-color-secondary hover:border-l-8   ' : 'bg-neutral-200 text-mov-label-md font-normal text-black  hover:border-l-color-secondary hover:border-l-4'">
            <div class="hover:border-l-red-600 hover:border-l-8"></div>
            <td class="px-3 py-2">{{ item.id }}</td>
            <td class="px-3 py-2"> <a class="flex items-center nav-link dropdown-toggle hidden-arrow" href="#" role="button"
            data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="../../../assets/person-table.svg" class="w-6 rounded-full " alt="" loading="lazy" />
          </a></td>
            <td class="px-3 py-2">{{ item.date }}</td>
            <td class="px-3 py-2">{{ item.email }}</td>
            <td class="px-3 py-2">{{ item.company }}</td>
            <td class="px-3 py-2">{{ item.insurer }}</td>
            <td class="px-3 py-2">{{ item.type }}</td>
            <td class="px-3 py-2">{{ item.policy }}</td>
            <td class="px-3 py-2">{{ item.expiration }}</td>
            <td class="px-3 py-2">{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
   

  </template>
  
  <script setup lang="ts">
  
  const tableData = [
    { id: 123456, resp: 'Silver', date: '11/05/2021 16:14', email: 'cassio.dias@1231231.com.br', company: 'PHONOWAY - COMERCIO E REPRESENTACAO DE SISTEMAS LTDA',insurer:'AMIL ASSISTENCIA MÉDICA INTERNACIONAL',type:'Inclusão',policy:'654541',expiration:'11/05/2021 16:14',status:'icon' },
    { id: 123456, resp: 'Silver', date: '11/05/2021 16:14', email: 'cassio.dias@1231231.com.br', company: 'PHONOWAY - COMERCIO E REPRESENTACAO DE SISTEMAS LTDA',insurer:'AMIL ASSISTENCIA MÉDICA INTERNACIONAL',type:'Inclusão',policy:'654541',expiration:'11/05/2021 16:14',status:'icon' },
    { id: 123456, resp: 'Silver', date: '11/05/2021 16:14', email: 'cassio.dias@1231231.com.br', company: 'PHONOWAY - COMERCIO E REPRESENTACAO DE SISTEMAS LTDA',insurer:'AMIL ASSISTENCIA MÉDICA INTERNACIONAL',type:'Inclusão',policy:'654541',expiration:'11/05/2021 16:14',status:'icon' },
    { id: 123456, resp: 'Silver', date: '11/05/2021 16:14', email: 'cassio.dias@1231231.com.br', company: 'PHONOWAY - COMERCIO E REPRESENTACAO DE SISTEMAS LTDA',insurer:'AMIL ASSISTENCIA MÉDICA INTERNACIONAL',type:'Inclusão',policy:'654541',expiration:'11/05/2021 16:14',status:'icon' },
    { id: 123456, resp: 'Silver', date: '11/05/2021 16:14', email: 'cassio.dias@1231231.com.br', company: 'PHONOWAY - COMERCIO E REPRESENTACAO DE SISTEMAS LTDA',insurer:'AMIL ASSISTENCIA MÉDICA INTERNACIONAL',type:'Inclusão',policy:'654541',expiration:'11/05/2021 16:14',status:'icon' },
    { id: 123456, resp: 'Silver', date: '11/05/2021 16:14', email: 'cassio.dias@1231231.com.br', company: 'PHONOWAY - COMERCIO E REPRESENTACAO DE SISTEMAS LTDA',insurer:'AMIL ASSISTENCIA MÉDICA INTERNACIONAL',type:'Inclusão',policy:'654541',expiration:'11/05/2021 16:14',status:'icon' },
    { id: 123456, resp: 'Silver', date: '11/05/2021 16:14', email: 'cassio.dias@1231231.com.br', company: 'PHONOWAY - COMERCIO E REPRESENTACAO DE SISTEMAS LTDA',insurer:'AMIL ASSISTENCIA MÉDICA INTERNACIONAL',type:'Inclusão',policy:'654541',expiration:'11/05/2021 16:14',status:'icon' },
    { id: 123456, resp: 'Silver', date: '11/05/2021 16:14', email: 'cassio.dias@1231231.com.br', company: 'PHONOWAY - COMERCIO E REPRESENTACAO DE SISTEMAS LTDA',insurer:'AMIL ASSISTENCIA MÉDICA INTERNACIONAL',type:'Inclusão',policy:'654541',expiration:'11/05/2021 16:14',status:'icon' },
    { id: 123456, resp: 'Silver', date: '11/05/2021 16:14', email: 'cassio.dias@1231231.com.br', company: 'PHONOWAY - COMERCIO E REPRESENTACAO DE SISTEMAS LTDA',insurer:'AMIL ASSISTENCIA MÉDICA INTERNACIONAL',type:'Inclusão',policy:'654541',expiration:'11/05/2021 16:14',status:'icon' },
  ];
  </script>