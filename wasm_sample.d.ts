// wasm_sample.d.ts
export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_sample" {
    export interface WasmSampleModule {
        _wasm_number_of_sequences(arr_ptr: number, arr_len: number, seq_ptr: number, seq_len: number): number;
        _wasm_number_of_sequences_all(arr_ptr: number, arr_len: number, sequence_ptr: number, seq_len: number): number;
        _wasm_get_gl_n_zm_size(n: number, m: number): number;
        _wasm_matrix_det(data_ptr: number, n: number): number;
        _gol_create(size: number): number;
        _gol_destroy(handle: number): void;
        _gol_init(handle: number): void;
        _gol_random_init(handle: number, live_prob: number): void;
        _gol_random_init_seed(handle: number, live_prob: number, seed: number): void;
        _gol_get_seed(handle: number): number;
        _gol_evolve(handle: number): void;
        _gol_set_topology(handle: number, mode: number): void;
        _gol_get_live_cells(handle: number, out_xy_ptr: number, max_count: number): number;
        _malloc(size: number): number;
        _free(ptr: number): void;
    }

    const init: () => Promise<WasmSampleModule>;
    export default init;
}