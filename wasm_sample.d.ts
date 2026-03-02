// wasm_sample.d.ts
export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_sample" {
    export interface WasmSampleModule {
        _wasm_number_of_sequences(arr_ptr: number, arr_len: number, seq_ptr: number, seq_len: number): number;
        _wasm_number_of_sequences_all(arr_ptr: number, arr_len: number, sequence_ptr: number, seq_len: number): number;
        _wasm_get_gl_n_zm_size(n: number, m: number): number;
        _wasm_matrix_det(data_ptr: number, n: number): number;
    }

    const init: () => Promise<WasmSampleModule>;
    export default init;
}