export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_linear_recur" {
    /**
     * Linear recurrence WASM ABI note:
     * - Memory is accessed via HEAP32 (int32).
     * - int64 is packed as 2 int32 words: [lo32, hi32] (two's complement).
     * - rational is packed as 4 int32 words: [m_lo, m_hi, n_lo, n_hi].
     * - For lr_* APIs, lengths like coeffs_len/init_len count \"rationals\", not int32 words.
     */
    export interface WasmLinearRecurModule {
        _lr_create(coeffs_ptr: number, coeffs_len: number, recursive_threshold: number): number;
        _lr_destroy(handle: number): void;
        _lr_order(handle: number): number;
        _lr_evaluate(handle: number, init_ptr: number, init_len: number, n: number, result_ptr: number): void;
        _lr_characteristic_polynomial(handle: number, out_ptr: number, max_len: number): number;
        _lr_transition_matrix_size(handle: number): number;
        _lr_transition_matrix_data(handle: number, out_ptr: number, max_len: number): void;
        _lr_evaluate_poly_at_matrix(handle: number, out_ptr: number, max_len: number): void;
        _wasm_matrix_power(data_ptr: number, n: number, exponent: number, out_ptr: number): void;
        _wasm_matrix_times_const(data_ptr: number, n: number, scalar: number, out_ptr: number): void;
        _wasm_matrix_add(data_a_ptr: number, data_b_ptr: number, n: number, out_ptr: number): void;
        _malloc(size: number): number;
        _free(ptr: number): void;
    }

    const init: (moduleOverrides?: { wasmBinary?: Buffer | Uint8Array }) => Promise<WasmLinearRecurModule>;
    export default init;
}

