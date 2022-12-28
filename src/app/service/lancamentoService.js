import ApiService from "../apiService";

export default class LancamentoService extends ApiService{
    constructor(){
        super('/api/lancamentos')
    }
    obterListaMeses(){
        return[
            {label:'Selecione...',value:''},
            {label:'janeiro',value:1},
             {label:'fevereiro',value:2},
             {label:'março',value:3},
             {label:'abril',value:4},
             {label:'maio',value:5},
             {label:'junho',value:6},
             {label:'julho',value:7},
             {label:'agosto',value:8},
             {label:'setenbro',value:9},
             {label:'outubro',value:10},
             {label:'novenbro',value:11},
            {label:'dezembro',value:12}
        ]
    }
    obterListaTipos(){
        return[
            {label:'Selecione...',value:''},
        {label:'Despesa',value:'DESPESA'},
        {label:'Receita',value:'RECEITA'},
        ]
    }
    salvar(Lancamento){
        return this.post('/',Lancamento);
    }
    consultar(LancamentoFiltro){
        let params = `?ano=${LancamentoFiltro.ano}`
        if(LancamentoFiltro.mes){
            params =`${params}&mes=${LancamentoFiltro.mes}`
        }
        if(LancamentoFiltro.tipo){
            params = `${params}&tipo=${LancamentoFiltro.tipo}`
        }
        if(LancamentoFiltro.status){
            params = `${params}&status=${LancamentoFiltro.status}`
        }
        if(LancamentoFiltro.usuario){
            params = `${params}&usuario=${LancamentoFiltro.usuario}`
        }
        if(LancamentoFiltro.descricao){
            params = `${params}&descricao=${LancamentoFiltro.descricao}`
        }
        return this.get(params)
    }
    deletar(id){
        return this.delete(`/${id}`)
    }
}