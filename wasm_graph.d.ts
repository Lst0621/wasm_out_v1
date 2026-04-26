export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_graph" {
    export interface WasmGraphModule {
        _wasm_graph_edge_count(n: number, directed: number, adj01_ptr: number): number;
        _wasm_graph_randomize_undirected_adj01(
            n: number,
            seed: number,
            out_adj01_ptr: number,
            out_edge_count_ptr: number,
            out_threshold_milli_ptr: number,
        ): number;
        _wasm_graph_all_pairs_bfs_distances(
            n: number,
            directed: number,
            adj01_ptr: number,
            out_dist_ptr: number,
        ): void;
        _wasm_graph_metric_dimension(
            n: number,
            adj01_ptr: number,
            out_dim_ptr: number,
            out_basis_ptr: number,
            basis_max: number,
        ): number;
        _wasm_graph_resolving_subsets_from_dist(
            n: number,
            adj01_ptr: number,
            dist_flat_ptr: number,
            mode: number,
            list_max_k: number,
            out_min_dim_ptr: number,
            out_smallest_basis_ptr: number,
            basis_max: number,
            out_list_count_ptr: number,
            out_list_used_ints_ptr: number,
            out_list_flat_ptr: number,
            list_flat_max_ints: number,
            out_list_truncated_ptr: number,
        ): number;
        _wasm_graph_resolving_subsets_with_non_resolving_size_minus_one_from_dist(
            n: number,
            adj01_ptr: number,
            dist_flat_ptr: number,
            mode: number,
            list_max_k: number,
            out_min_dim_ptr: number,
            out_smallest_basis_ptr: number,
            basis_max: number,
            out_list_count_ptr: number,
            out_list_used_ints_ptr: number,
            out_list_flat_ptr: number,
            list_flat_max_ints: number,
            out_list_truncated_ptr: number,
        ): number;
        _wasm_graph_resolving_subsets_all_modes_with_non_resolving_size_minus_one_from_dist(
            n: number,
            adj01_ptr: number,
            dist_flat_ptr: number,
            list_max_k: number,
            out_min_dim_3_ptr: number,
            out_smallest_basis_3_ptr: number,
            basis_max: number,
            out_list_count_3_ptr: number,
            out_list_used_ints_3_ptr: number,
            out_list_flat_3_ptr: number,
            list_flat_max_ints_per_mode: number,
            out_list_truncated_3_ptr: number,
        ): number;
        _wasm_graph_resolving_subsets_all_modes_paginated_with_non_resolving_size_minus_one_from_dist(
            n: number,
            adj01_ptr: number,
            dist_flat_ptr: number,
            page_size: number,
            page_index_3_ptr: number,
            out_min_dim_3_ptr: number,
            out_smallest_basis_3_ptr: number,
            basis_max: number,
            out_total_count_3_ptr: number,
            out_page_count_3_ptr: number,
            out_page_list_count_3_ptr: number,
            out_page_list_used_ints_3_ptr: number,
            out_page_list_flat_3_ptr: number,
            page_list_flat_max_ints_per_mode: number,
            out_page_list_truncated_3_ptr: number,
        ): number;
        _wasm_graph_resolving_subsets_cache_create(): number;
        _wasm_graph_resolving_subsets_cache_destroy(handle: number): void;
        _wasm_graph_resolving_subsets_cache_set_graph(
            handle: number,
            n: number,
            adj01_ptr: number,
            dist_flat_ptr: number,
        ): number;
        _wasm_graph_resolving_subsets_cache_get_page(
            handle: number,
            page_size: number,
            page_index_3_ptr: number,
            out_min_dim_3_ptr: number,
            out_smallest_basis_3_ptr: number,
            basis_max: number,
            out_total_count_3_ptr: number,
            out_page_count_3_ptr: number,
            out_page_list_count_3_ptr: number,
            out_page_list_used_ints_3_ptr: number,
            out_page_list_flat_3_ptr: number,
            page_list_flat_max_ints_per_mode: number,
            out_page_list_truncated_3_ptr: number,
            out_min_list_count_3_ptr: number,
            out_min_list_used_ints_3_ptr: number,
            out_min_list_flat_3_ptr: number,
            min_list_flat_max_ints_per_mode: number,
            out_min_list_truncated_3_ptr: number,
        ): number;
        _malloc(size: number): number;
        _free(ptr: number): void;
    }

    const init: (moduleOverrides?: { wasmBinary?: Buffer | Uint8Array }) => Promise<WasmGraphModule>;
    export default init;
}

