# Diagram

```mermaid
graph TD;
    ListManager-->BaseImplementationList;
    ListCollection-->ListManager;
    FilterService-->ListManager;
    PaginationService-->ListManager;
    SortService-->ListManager;
    ETCService-->ListManager;
    ListComponent-->ListCollection;
    FilterComponent-->FilterService;
    PaginationComponent-->PaginationService;
    SortComponent-->SortService;
    ETCComponent-->ETCService;
```