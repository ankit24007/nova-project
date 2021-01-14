<template>
    <div>
        <heading class="mb-6">Currency Calculator</heading>
            <div class="card">
                <div class="flex border-b border-40">
                    <div class="w-1/5 px-8 py-6">
                        <label class="inline-block text-80 pt-2 leading-tight">
                            Amount&nbsp;<span class="text-danger text-sm">*</span>
                        </label>
                    </div> 
                    <div class="py-6 px-8 w-1/2">
                        <input type="number" placeholder="amount" class="w-full form-control form-input form-input-bordered" v-model="inputData">
                    </div>
                </div>

                <div class="py-6 px-8 w-1/2">
                    
                    <select v-model="currency">
                        <option value="USD" :selected="true">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <label class="inline-block text-80 pt-2 leading-tight">
                    Result : {{result}}
                </label>
            </div>
        </div>
        
        <button type="button" class="btn btn-default btn-primary inline-flex items-center relative mr-3" dusk="create-and-add-another-button" @click="convert">
            <span class="">Convert</span> 
        </button>
        {{amount}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputData: 0,
            currency: 'USD',
            result : 0
        }
    },

    methods: {
        convert() {
            fetch('https://api.exchangeratesapi.io/latest?base=INR')
                .then(response => response.json())
                .then(data => {
                    let rate = data.rates[this.currency];
                    this.result = rate * this.inputData;
                    
                });
        }
    }
}
</script>

<style>
/* Scoped Styles */
</style>
