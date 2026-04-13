// wasm_sample.d.ts
export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_sample" {
    /**
     * Linear recurrence WASM ABI note:
     * - Memory is accessed via HEAP32 (int32).
     * - int64 is packed as 2 int32 words: [lo32, hi32] (two's complement).
     * - rational is packed as 4 int32 words: [m_lo, m_hi, n_lo, n_hi].
     * - For lr_* APIs, lengths like coeffs_len/init_len count "rationals", not int32 words.
     */
    export interface WasmSampleModule {
        _wasm_number_of_sequences(arr_ptr: number, arr_len: number, seq_ptr: number, seq_len: number): number;
        _wasm_number_of_sequences_all(arr_ptr: number, arr_len: number, sequence_ptr: number, seq_len: number): number;
        _wasm_get_gl_n_zm_size(n: number, m: number): number;
        _wasm_get_gl_n_zm(n: number, m: number, out_count_ptr: number): number;
        _wasm_is_matrix_group(data_ptr: number, count: number, n: number, modulus: number): number;
        _wasm_matrix_det(data_ptr: number, n: number): number;
        _wasm_matrix_inverse_mod(data_ptr: number, n: number, m: number, out_ptr: number): void;
        _gol_create(size: number): number;
        _gol_destroy(handle: number): void;
        _gol_init(handle: number): void;
        _gol_random_init(handle: number, live_prob: number): void;
        _gol_random_init_seed(handle: number, live_prob: number, seed: number): void;
        _gol_get_seed(handle: number): number;
        _gol_evolve(handle: number): void;
        _gol_set_topology(handle: number, mode: number): void;
        _gol_get_live_cells(handle: number, out_xy_ptr: number, max_count: number): number;
        /** coeffs_ptr points to coeffs_len packed rationals (4*coeffs_len int32). */
        _lr_create(coeffs_ptr: number, coeffs_len: number, recursive_threshold: number): number;
        _lr_destroy(handle: number): void;
        _lr_order(handle: number): number;
        /** init_ptr points to init_len packed rationals; result_ptr writes 1 packed rational (4 int32). */
        _lr_evaluate(handle: number, init_ptr: number, init_len: number, n: number, result_ptr: number): void;
        /** out_ptr writes len packed rationals (4*len int32). max_len counts coefficients (not int32 words). */
        _lr_characteristic_polynomial(handle: number, out_ptr: number, max_len: number): number;
        _lr_transition_matrix_size(handle: number): number;
        /** out_ptr writes max_len packed rationals (4*max_len int32). max_len counts matrix entries (not int32 words). */
        _lr_transition_matrix_data(handle: number, out_ptr: number, max_len: number): void;
        /** out_ptr writes max_len packed rationals (4*max_len int32). max_len counts matrix entries (not int32 words). */
        _lr_evaluate_poly_at_matrix(handle: number, out_ptr: number, max_len: number): void;
        _wasm_matrix_power(data_ptr: number, n: number, exponent: number, out_ptr: number): void;
        _wasm_matrix_times_const(data_ptr: number, n: number, scalar: number, out_ptr: number): void;
        _wasm_matrix_add(data_a_ptr: number, data_b_ptr: number, n: number, out_ptr: number): void;
        _bars_game_create(): number;
        _bars_game_destroy(handle: number): void;
        _bars_game_set_seed(handle: number, seed: number): void;
        _bars_game_init(handle: number): void;
        _bars_game_get_state(handle: number, out_ptr: number): void;
        _bars_game_get_future_state(handle: number, choice_index: number, out_ptr: number): void;
        _bars_game_apply_choice(handle: number, index: number): void;
        _bars_game_is_ended(handle: number): number;
        _bars_game_state_size(handle: number): number;
        _bars_game_num_choices(handle: number): number;
        _bars_game_min_val(handle: number): number;
        _bars_game_max_val(handle: number): number;
        _wasm_graph_edge_count(n: number, directed: number, adj01_ptr: number): number;
        _wasm_graph_all_pairs_bfs_distances(n: number, directed: number, adj01_ptr: number, out_dist_ptr: number): void;
        _wasm_graph_metric_dimension(n: number, adj01_ptr: number, out_dim_ptr: number, out_basis_ptr: number, basis_max: number): number;
        _malloc(size: number): number;
        _free(ptr: number): void;
    }

    /** Optional Module overrides; e.g. { wasmBinary } for Node to avoid fetch. */
    const init: (moduleOverrides?: { wasmBinary?: Buffer | Uint8Array }) => Promise<WasmSampleModule>;
    export default init;
}